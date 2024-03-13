(function() {
    const btns = document.querySelectorAll('.js-accordion-btn');

    btns.forEach(item => {
        const accordion = item.closest('.js-accordion');
        const content = accordion.querySelector('.js-content-accordion')
        const height = accordion.querySelector('.js-height-accordion')

        item.addEventListener('click', function() {
            const heightContent = height.offsetHeight;

            if(content.offsetHeight === 0) {
                accordion.classList.add('open')
                content.style.height = `${heightContent + 'px'}`
            } else {
                accordion.classList.remove('open')
                content.style.height = 0
            }
        })
    })
})();