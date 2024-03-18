(function() {
    const btnBurger = document.querySelector('.js-burger-btn');
    const burger = document.querySelector('.js-burger');
    const wrapperBody = document.querySelector('.b-page-wrapper');
    const closeBurger = document.querySelector('.js-close-burger');
    const closeBtnBurger = document.querySelector('.js-close-btn');

    btnBurger.addEventListener('click', () => {
        burger.classList.toggle('open')

        if(burger.classList.contains('open')) {
            wrapperBody.style.overflow = 'hidden'
        } else {
            wrapperBody.style.overflow = 'auto'
        }
    })

    closeBurger.addEventListener('click', () => {
        burger.classList.remove('open')
        wrapperBody.style.overflow = 'auto'
    })

    closeBtnBurger.addEventListener('click', () => {
        burger.classList.remove('open')
        wrapperBody.style.overflow = 'auto'
    })
})();