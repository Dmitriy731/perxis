(function() {
    const HEADER = document.querySelector('.js-header');
    const wrapper  = document.querySelector('.b-page-wrapper')

    let lastScrollTop = 0;

    const hideHeader = () => HEADER?.classList.add('hidden');
    const showHeader = () => HEADER?.classList.remove('hidden');

    wrapper.addEventListener('scroll', function (event) {
        let st = wrapper.scrollTop;

        if (st - 5 > lastScrollTop && lastScrollTop !== 0) {
            hideHeader();
        } else if (st < lastScrollTop) {
            showHeader();
        }

        lastScrollTop = st <= 0 ? 0 : st;
    });
})();