/* 모바일 메뉴 열기/닫기 (스타일은 css/mobile_menu.css) */
(function () {
    function init() {
        var btn = document.querySelector('.sideMenu');
        var side = document.querySelector('.side');
        var off = document.getElementById('sideOff');
        if (!btn || !side) return;

        // 지금 보고 있는 페이지는 밑줄
        var onContact = /contact\.html/.test(location.pathname);
        Array.prototype.forEach.call(side.querySelectorAll('a'), function (a) {
            var isContact = /contact\.html/.test(a.getAttribute('href') || '');
            a.classList.toggle('current', onContact ? isContact : /#portfolio/.test(a.getAttribute('href') || ''));
            a.addEventListener('click', function () { setOpen(false); });   // 같은 페이지 안 이동(#portfolio)일 때도 메뉴가 닫히도록
        });

        function setOpen(open) {
            side.classList.toggle('open', open);
            document.documentElement.classList.toggle('menu_open', open);
            side.setAttribute('aria-hidden', open ? 'false' : 'true');
        }
        btn.addEventListener('click', function () { setOpen(true); });
        if (off) off.addEventListener('click', function () { setOpen(false); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
        window.addEventListener('resize', function () { if (window.innerWidth > 700) setOpen(false); });
        side.setAttribute('aria-hidden', 'true');
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
