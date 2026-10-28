/*
  AI 모델 이미지 & 상세페이지 섹션 동작
  - 작업물 목록은 js/ai_works.js 에서 관리합니다.
  - 썸네일 그리드(탭 필터 + 페이지 넘김) / 클릭하면 상세 팝업(모델 이미지 + 상세페이지)
*/
(function () {
    var works = window.AI_WORKS || [];

    var grid = document.getElementById('aiGrid');
    var pager = document.getElementById('aiPager');
    var modal = document.getElementById('aiModal');
    if (!grid || !pager || !modal) return;

    var tabs = document.querySelectorAll('.ai_tab');
    var elTitle = modal.querySelector('.ai_modal_title');
    var elCount = modal.querySelector('.ai_modal_count');
    var elBody = modal.querySelector('.ai_modal_body');
    var elInner = modal.querySelector('.ai_modal_inner');
    var btnPrev = modal.querySelector('.ai_prev');
    var btnNext = modal.querySelector('.ai_next');
    var btnClose = modal.querySelector('.ai_close');

    var state = { filter: 'all', page: 0 };
    var list = [];          // 현재 탭에 해당하는 작업물
    var current = -1;       // 팝업에 열려 있는 작업물 (list 기준 인덱스)
    var lastFocus = null;

    function has(arr) { return arr && arr.length > 0; }

    function getList() {
        return works.filter(function (w) {
            if (state.filter === 'models') return has(w.models);
            if (state.filter === 'detail') return has(w.detail);
            return true;
        });
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

    /* ---------- 썸네일 그리드 ---------- */
    function render() {
        list = getList();
        var size = perPage();
        var pages = Math.max(1, Math.ceil(list.length / size));
        if (state.page > pages - 1) state.page = pages - 1;
        if (state.page < 0) state.page = 0;

        grid.innerHTML = '';
        if (list.length === 0) {
            grid.appendChild(el('p', 'ai_empty', '등록된 작업물이 없어요.'));
        }
        list.slice(state.page * size, state.page * size + size).forEach(function (w, i) {
            var idx = state.page * size + i;
            var card = el('button', 'ai_card');
            card.type = 'button';
            card.setAttribute('aria-label', w.title + ' 자세히 보기');
            card.appendChild(makeImg(w.thumb, w.title, true));
            var cap = el('div', 'ai_card_cap');
            cap.appendChild(el('strong', '', w.title));
            if (w.tag) cap.appendChild(el('span', '', w.tag));
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

    tabs.forEach(function (t) {
        t.addEventListener('click', function () {
            tabs.forEach(function (o) { o.classList.remove('active'); });
            t.classList.add('active');
            state.filter = t.getAttribute('data-filter');
            state.page = 0;
            render();
        });
    });

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

    /* ---------- 상세 팝업 ---------- */
    function lockPage(lock) {
        // 팝업이 열려 있는 동안 fullpage 의 휠/터치/키보드 스크롤을 꺼서 팝업 안에서만 스크롤되게 함
        var api = window.fullpage_api;
        if (!api) return;
        try {
            api.setAllowScrolling(!lock);
            api.setKeyboardScrolling(!lock);
            if (api.setMouseWheelScrolling) api.setMouseWheelScrolling(!lock);
        } catch (e) {}
    }

    function fillModal(i) {
        var w = list[i];
        if (!w) return;
        current = i;

        elTitle.textContent = w.title;
        if (w.tag) elTitle.appendChild(el('small', '', w.tag));
        elCount.textContent = (i + 1) + ' / ' + list.length;

        elInner.innerHTML = '';
        if (w.desc) elInner.appendChild(el('p', 'ai_modal_desc', w.desc));

        if (has(w.models)) {
            var s1 = el('div', 'ai_modal_sec');
            s1.appendChild(el('h3', '', 'MODEL IMAGES'));
            var g = el('div', 'ai_models_list');
            w.models.forEach(function (src, n) { g.appendChild(makeImg(src, w.title + ' 모델 이미지 ' + (n + 1), true)); });
            s1.appendChild(g);
            elInner.appendChild(s1);
        }
        if (has(w.detail)) {
            var s2 = el('div', 'ai_modal_sec');
            s2.appendChild(el('h3', '', 'DETAIL PAGE'));
            var d = el('div', 'ai_detail_list');
            w.detail.forEach(function (src, n) { d.appendChild(makeImg(src, w.title + ' 상세페이지 ' + (n + 1), true)); });
            s2.appendChild(d);
            elInner.appendChild(s2);
        }
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

    // 팝업 안의 휠/터치 이벤트가 fullpage 로 전달되어 섹션이 넘어가지 않도록 막음 (스크롤 자체는 막지 않음)
    ['wheel', 'touchstart', 'touchmove', 'touchend'].forEach(function (type) {
        modal.addEventListener(type, function (e) { e.stopPropagation(); }, { passive: true });
    });

    render();
})();
