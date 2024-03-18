(function () {
    const slider = document.querySelectorAll('.js-slider');

    slider.forEach(item => {
        let isInit;
        var swiper;
        const pagination = item.querySelector('.b-swiper-pagination')

        function initSwiper() {
            swiper = new Swiper(item, {
                speed: 500,
                loop: true,
                spaceBetween: 18,
                slidesPerView: 1,

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }
            });
            isInit = true;
        }

        if (window.innerWidth < 1024) {
            initSwiper();
        }

        window.addEventListener('resize', function () {
            if (window.innerWidth >= 1024 && isInit) {
                swiper.destroy();
                isInit = false;
            }

            if (window.innerWidth < 1024 && !isInit) {
                initSwiper();
                isInit = true;
            }
        })
    })
})();
