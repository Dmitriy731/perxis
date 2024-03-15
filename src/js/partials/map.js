(function() {
    const mapContent = document.querySelector('.js-map-content')

    const data = [
        {
            service: {
                name: 'Dealer Company Name',
                address: 'Москва, Старая Басманная улица, 9, корп. 2',
                arr: [
                    {
                        title: 'Продажи:',
                        tel: '+7 (495) 428 12 94',
                        schedule: [
                            'пн-пт: 09:00-21:00',
                            'сб, вс: 10:00-20:00'
                        ]
                    },
                    {
                        title: 'Сервис:',
                        tel: '+7 (495) 428 12 95',
                        schedule: [
                            'пн-сб: 08:00-22:00',
                            'вс: 09:00-21:00'
                        ]
                    }
                ]
            }
        },
        {
            service: {
                name: 'Dealer Company Name #2',
                address: 'Москва, улица Авиаконструктора Микояна, 2',
                arr: [
                    {
                        title: 'Продажи:',
                        tel: '+7 (495) 428 12 94',
                        schedule: [
                            'пн-пт: 09:00-21:00',
                            'сб, вс: 10:00-20:00'
                        ]
                    },
                    {
                        title: 'Сервис:',
                        tel: '+7 (495) 428 12 95',
                        schedule: [
                            'пн-сб: 08:00-22:00',
                            'вс: 09:00-21:00'
                        ]
                    }
                ]
            }
        },
    ]

    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['zoomControl'],
        });

        var markers = [];
        var activeMarker = null;

        data.forEach(item => {
            ymaps.geocode(item.service.address).then(function (res) {
                var firstGeoObject = res.geoObjects.get(0),
                    coords = firstGeoObject.geometry.getCoordinates();

                var marker = new ymaps.Placemark(
                    coords,
                    {
                        hintContent: item.service.name,
                        balloonContent: item.service,
                    },
                    {
                        hideIconOnBalloonOpen: false,
                        iconLayout: 'default#image',
                        iconImageHref: './images/content/map/pin.svg',
                        iconImageSize: [66, 76],
                        iconImageOffset: [0, 0],
                        balloonContentLayout: createBalloonLayout(item.service),
                    }
                );

                marker.events.add('click', function () {
                    if (activeMarker) {
                        activeMarker.options.set('iconImageHref', './images/content/map/pin.svg');
                    }
                    // Устанавливаем текущий маркер как активный
                    activeMarker = marker;

                    marker.options.set('iconImageHref', './images/content/map/pin-active.svg');
                });

                marker.events.add('balloonopen', function (e) {
                    mapContent.innerHTML =
                        `<div class="b-map__content-inner">
                            <div class="b-map__content-name">${item.service.name}</div>
                            <div class="b-map__content-address">${item.service.address}</div>
                            <div class="b-map__content-service">${item.service.arr.map(el => {
                                return (
                                    `<div class="b-map__contact">
                                        <p class="b-map__service" >${el.title}</p>
                                        <a class="b-map__tel" href="tel:${el.tel.replace(/[\s\-\(\)]/g, "")}" title=${el.tel}>${el.tel}</a>
                                        <div class="b-map__time">${el.schedule.map(item => `<span>${item}</span>`).join('')}</div>
                                    </div>`
                                )
                            }).join('')}</div>
                            <a class="b-button b-button--dark b-button--min" href="tel:+79876543210" title="+7 (987) 654 32 10">
                                <span>Заказать звонок</span>
                                <i class="b-icon b-icon--btn icon-phone icon-phone--btn"></i>
                            </a>
                        </div>`
                    ;
                });

                myMap.geoObjects.add(marker);
            });
        });
    }

    function createBalloonLayout(service) {
        return ymaps.templateLayoutFactory.createClass(
            `<div>${service.name}</div>
            <div>${service.address}</div>
            <div>${service.arr.map(el => `<p>${el.title} ${el.tel} ${el.schedule}</p>`)}</div>`
        );
    }
})();