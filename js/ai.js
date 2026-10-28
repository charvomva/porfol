/*
  AI 모델 이미지 & 상세페이지 섹션 동작
  - 작업물 목록은 js/ai_works.js 에서 관리합니다.
  - 왼쪽 필터(카테고리: 후드티, 청바지 ...)는 작업물의 category 값으로 자동 생성됩니다.
  - 타일을 누르면 상세 화면(왼쪽 이미지 스택 + 오른쪽 정보 패널)이 열립니다.
*/
(function () {
    var works = window.AI_WORKS || [];

    var grid = document.getElementById('aiGrid');
    var pager = document.getElementById('aiPager');
    var filtersEl = document.getElementById('aiFilters');
    var countEl = document.getElementById('aiCount');
    var modal = document.getElementById('aiModal');
    if (!grid || !pager || !filtersEl || !modal) return;

    var elGallery = modal.querySelector('.ai_gallery');
    var elInfo = modal.querySelector('.ai_info');
    var elCount = modal.querySelector('.ai_modal_count');
    var elBody = modal.querySelector('.ai_modal_body');
    var btnPrev = modal.querySelector('.ai_prev');
    var btnNext = modal.querySelector('.ai_next');
    var btnClose = modal.querySelector('.ai_close');

    var state = { filter: 'all', page: 0 };   // filter: 'all' 또는 카테고리 이름
    var list = [];          // 현재 필터에 해당하는 작업물
    var current = -1;       // 상세 화면에 열려 있는 작업물 (list 기준 인덱스)
    var lastFocus = null;

    function has(arr) { return arr && arr.length > 0; }
    function cat(w) { return w.category || w.tag || ''; }

    // 같은 상품(product)의 색상 작업물은 올린 순서 그대로 연달아 보이도록 묶음 (상품은 처음 등장한 순서)
    function getList() {
        var picked = works.filter(function (w) { return state.filter === 'all' || cat(w) === state.filter; });
        var order = [];
        picked.forEach(function (w) {
            var k = w.product || w.title;
            if (order.indexOf(k) === -1) order.push(k);
        });
        return picked.map(function (w, i) { return { w: w, g: order.indexOf(w.product || w.title), i: i }; })
            .sort(function (a, b) { return a.g - b.g || a.i - b.i; })
            .map(function (x) { return x.w; });
    }

    // 화면 크기에 따라 CSS(--cols, --rows)가 정한 열x줄 수만큼이 한 페이지
    function perPage() {
        var cs = getComputedStyle(grid);
        var cols = parseInt(cs.getPropertyValue('--cols'), 10) || 4;
        var rows = parseInt(cs.getPropertyValue('--rows'), 10) || 2;
        return cols * rows;
    }

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }

    function makeImg(src, alt, lazy) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = alt || '';
        if (lazy) img.loading = 'lazy';
        // 이미지 경로가 틀리거나 파일이 아직 없으면 깨진 아이콘 대신 숨김
        img.onerror = function () { this.style.visibility = 'hidden'; };
        return img;
    }

    /* ---------- 왼쪽 카테고리 필터 ---------- */
    function buildFilters() {
        var names = [];
        works.forEach(function (w) {
            var c = cat(w);
            if (c && names.indexOf(c) === -1) names.push(c);
        });
        var items = [{ key: 'all', label: 'All Works' }].concat(names.map(function (n) { return { key: n, label: n }; }));

        filtersEl.innerHTML = '';
        items.forEach(function (it) {
            var li = document.createElement('li');
            var b = el('button', it.key === state.filter ? 'active' : '', it.label);
            b.type = 'button';
            b.setAttribute('data-filter', it.key);
            b.addEventListener('click', function () {
                state.filter = it.key;
                state.page = 0;
                Array.prototype.forEach.call(filtersEl.querySelectorAll('button'), function (o) {
                    o.classList.toggle('active', o === b);
                });
                render();
            });
            li.appendChild(b);
            filtersEl.appendChild(li);
        });
    }

    /* ---------- 타일 그리드 ---------- */
    function render() {
        list = getList();
        var size = perPage();
        var pages = Math.max(1, Math.ceil(list.length / size));
        if (state.page > pages - 1) state.page = pages - 1;
        if (state.page < 0) state.page = 0;

        countEl.textContent = list.length + (list.length === 1 ? ' work' : ' works');

        grid.innerHTML = '';
        if (list.length === 0) {
            grid.appendChild(el('p', 'ai_empty', '등록된 작업물이 없어요.'));
        }
        list.slice(state.page * size, state.page * size + size).forEach(function (w, i) {
            var idx = state.page * size + i;
            var card = el('button', 'ai_card');
            card.type = 'button';
            card.setAttribute('aria-label', w.title + ' 자세히 보기');

            var tile = el('div', 'ai_tile');
            var thumbImg = makeImg(w.thumb, w.title, true);
            if (w.thumbPos) thumbImg.style.objectPosition = w.thumbPos;   // 썸네일이 잘릴 때 보여줄 위치 조절
            tile.appendChild(thumbImg);
            var hoverSrc = w.hover || (has(w.models) ? w.models[0] : '');
            if (hoverSrc && hoverSrc !== w.thumb) {
                var h = makeImg(hoverSrc, '', true);
                h.className = 'hov';
                if (w.hoverPos) h.style.objectPosition = w.hoverPos;
                tile.appendChild(h);
            }
            card.appendChild(tile);

            var cap = el('div', 'ai_cap');
            cap.appendChild(el('strong', '', w.title));
            if (cat(w)) cap.appendChild(el('span', '', cat(w)));
            card.appendChild(cap);

            card.addEventListener('click', function () { openModal(idx); });
            grid.appendChild(card);
        });

        renderPager(pages);
    }

    function renderPager(pages) {
        pager.innerHTML = '';
        if (pages <= 1) return;

        function btn(label, page, opts) {
            var b = el('button', opts && opts.on ? 'on' : '', label);
            b.type = 'button';
            if (opts && opts.aria) b.setAttribute('aria-label', opts.aria);
            if (opts && opts.disabled) b.disabled = true;
            b.addEventListener('click', function () { state.page = page; render(); });
            pager.appendChild(b);
        }
        btn('‹', state.page - 1, { disabled: state.page === 0, aria: '이전 페이지' });
        for (var p = 0; p < pages; p++) {
            btn(String(p + 1), p, { on: p === state.page, aria: (p + 1) + '페이지' });
        }
        btn('›', state.page + 1, { disabled: state.page === pages - 1, aria: '다음 페이지' });
    }

    // 창 크기가 바뀌면 한 페이지에 보이는 개수가 달라지므로, 보고 있던 첫 작업물이 있는 페이지로 맞춰서 다시 그림
    var resizeTimer = null;
    var lastSize = perPage();
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            var size = perPage();
            if (size !== lastSize) {
                state.page = Math.floor((state.page * lastSize) / size);
                lastSize = size;
                render();
            }
        }, 150);
    });

    /* ---------- 상세 화면 ---------- */
    function lockPage(lock) {
        // 열려 있는 동안 fullpage 의 휠/터치/키보드 스크롤을 꺼서 상세 화면 안에서만 스크롤되게 함
        var api = window.fullpage_api;
        if (!api) return;
        try {
            api.setAllowScrolling(!lock);
            api.setKeyboardScrolling(!lock);
            if (api.setMouseWheelScrolling) api.setMouseWheelScrolling(!lock);
        } catch (e) {}
    }

    function accordion(label, text) {
        var d = el('details', 'ai_acc');
        d.appendChild(el('summary', '', label));
        d.appendChild(el('p', '', text));
        return d;
    }

    function fillModal(i) {
        var w = list[i];
        if (!w) return;
        current = i;
        elCount.textContent = (i + 1) + ' / ' + list.length;

        /* 왼쪽: 모델 이미지 → 상세페이지 순서로 쭉 이어붙임 */
        elGallery.innerHTML = '';
        var modelsTop = null, detailTop = null;
        if (has(w.models)) {
            w.models.forEach(function (src, n) {
                var img = makeImg(src, w.title + ' 모델 이미지 ' + (n + 1), true);
                if (n === 0) modelsTop = img;
                elGallery.appendChild(img);
            });
        }
        if (has(w.detail)) {
            var wrap = el('div', 'ai_detail_wrap');
            if (has(w.models)) elGallery.appendChild(el('div', 'ai_gallery_label', 'Detail Page'));
            w.detail.forEach(function (src, n) {
                wrap.appendChild(makeImg(src, w.title + ' 상세페이지 ' + (n + 1), true));
            });
            detailTop = wrap;
            elGallery.appendChild(wrap);
        }

        /* 오른쪽: 따라오는 정보 패널 */
        elInfo.innerHTML = '';
        elInfo.appendChild(el('h3', 'ai_info_title', w.title));
        if (cat(w)) elInfo.appendChild(el('p', 'ai_info_cat', cat(w)));

        var btns = el('div', 'ai_info_btns');
        function jump(label, target, solid) {
            var b = el('button', 'ai_btn' + (solid ? ' solid' : ''), label);
            b.type = 'button';
            b.addEventListener('click', function () {
                if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            btns.appendChild(b);
        }
        // 모델 이미지와 상세페이지 이미지가 둘 다 있을 때만 이동 버튼을 보여줌 (하나뿐이면 이동할 곳이 없음)
        if (modelsTop && detailTop) {
            jump('Model Images', modelsTop, false);
            jump('Detail Page', detailTop, !w.detailUrl);
        }
        // 실제 상세페이지(스마트스토어 등)가 따로 있으면 새 창으로 여는 링크 버튼
        if (w.detailUrl) {
            var link = el('a', 'ai_btn solid', w.detailLabel || 'View Detail Page ↗');
            link.href = w.detailUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            btns.appendChild(link);
        }
        if (btns.children.length) elInfo.appendChild(btns);
        if (w.detailUrl) elInfo.appendChild(el('p', 'ai_info_note', w.detailNote || '실제 상세페이지가 새 창에서 열려요.'));

        if (w.desc) elInfo.appendChild(el('p', 'ai_info_desc', w.desc));
        if (w.tools) elInfo.appendChild(accordion('Tools', w.tools));
        if (w.role) elInfo.appendChild(accordion('Role', w.role));

        elBody.scrollTop = 0;
        btnPrev.disabled = list.length < 2;
        btnNext.disabled = list.length < 2;
    }

    function openModal(i) {
        lastFocus = document.activeElement;
        fillModal(i);
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        lockPage(true);
        btnClose.focus();
    }

    function closeModal() {
        if (!modal.classList.contains('open')) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        lockPage(false);
        current = -1;
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function step(d) {
        if (list.length < 2) return;
        fillModal((current + d + list.length) % list.length);
    }

    btnClose.addEventListener('click', closeModal);
    btnPrev.addEventListener('click', function () { step(-1); });
    btnNext.addEventListener('click', function () { step(1); });

    document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('open')) return;
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowLeft') step(-1);
        else if (e.key === 'ArrowRight') step(1);
    });

    // 상세 화면 안의 휠/터치 이벤트가 fullpage 로 전달되어 섹션이 넘어가지 않도록 막음 (스크롤 자체는 막지 않음)
    ['wheel', 'touchstart', 'touchmove', 'touchend'].forEach(function (type) {
        modal.addEventListener(type, function (e) { e.stopPropagation(); }, { passive: true });
    });

    buildFilters();
    render();
})();
