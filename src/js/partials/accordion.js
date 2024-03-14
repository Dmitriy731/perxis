(function() {
    const btns = document.querySelectorAll('.js-accordion-btn');

    btns.forEach(item => {
        const accordion = item.closest('.js-accordion');
        const content = accordion.querySelector('.js-content-accordion')
        const height = accordion.querySelector('.js-height-accordion')
        const heightContent = height.offsetHeight;

        function accordionFunc() {

            if(content.offsetHeight === 0) {
                accordion.classList.add('open')
                content.style.height = `${heightContent + 'px'}`
            } else {
                accordion.classList.remove('open')
                content.style.height = 0
            }
        }

        if(window.innerWidth >= 768) {
            content.style.height = `${heightContent + 'px'}`
            item.removeEventListener('click', accordionFunc, false);
        } else {
            content.style.height = 0
            item.addEventListener('click', accordionFunc, false)
        }

        window.addEventListener('resize', function() {
            if(window.innerWidth >= 768) {
                content.style.height = `${heightContent + 'px'}`
                item.removeEventListener('click', accordionFunc, false);
            } else {
                content.style.height = 0
                item.addEventListener('click', accordionFunc, false)
            }
        })
    })
})();