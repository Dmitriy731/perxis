var headingSlider = new Swiper('.js-heading-slider', {
    speed: 500,
    slidesPerView: 1,

    pagination: {
        el: '.js-heading-slider .b-swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
