"use strict";document.addEventListener("DOMContentLoaded",function(){var t,i,o,s,e,n,a,c,r,l;new Swiper(".js-heading-slider",{speed:500,slidesPerView:1,pagination:{el:".js-heading-slider .b-swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelector(".js-header"),i=document.querySelector(".b-page-wrapper"),o=0,i.addEventListener("scroll",function(e){var n=i.scrollTop;o<n-5&&0!==o?t?.classList.add("hidden"):n<o&&t?.classList.remove("hidden"),o=n<=0?0:n}),document.querySelectorAll(".js-accordion-btn").forEach(function(e){var n=e.closest(".js-accordion"),t=n.querySelector(".js-content-accordion"),i=n.querySelector(".js-height-accordion").offsetHeight;function o(){0===t.offsetHeight?(n.classList.add("open"),t.style.height=i+"px"):(n.classList.remove("open"),t.style.height=0)}768<=window.innerWidth?(t.style.height=i+"px",e.removeEventListener("click",o,!1)):(t.style.height=0,e.addEventListener("click",o,!1)),window.addEventListener("resize",function(){768<=window.innerWidth?(t.style.height=i+"px",e.removeEventListener("click",o,!1)):(t.style.height=0,e.addEventListener("click",o,!1))})}),s=document.querySelector(".js-map-content"),e=[{service:{name:"Dealer Company Name",address:"Москва, Старая Басманная улица, 9, корп. 2",arr:[{title:"Продажи:",tel:"+7 (495) 428 12 94",schedule:["пн-пт: 09:00-21:00","сб, вс: 10:00-20:00"]},{title:"Сервис:",tel:"+7 (495) 428 12 95",schedule:["пн-сб: 08:00-22:00","вс: 09:00-21:00"]}]}},{service:{name:"Dealer Company Name #2",address:"Москва, улица Авиаконструктора Микояна, 2",arr:[{title:"Продажи:",tel:"+7 (495) 428 12 94",schedule:["пн-пт: 09:00-21:00","сб, вс: 10:00-20:00"]},{title:"Сервис:",tel:"+7 (495) 428 12 95",schedule:["пн-сб: 08:00-22:00","вс: 09:00-21:00"]}]}}],ymaps.ready(function(){var i=new ymaps.Map("map",{center:[55.76,37.64],zoom:10,controls:["zoomControl"]}),o=null;e.forEach(function(t){ymaps.geocode(t.service.address).then(function(e){var e=e.geoObjects.get(0).geometry.getCoordinates(),n=new ymaps.Placemark(e,{hintContent:t.service.name,balloonContent:t.service},{hideIconOnBalloonOpen:!1,iconLayout:"default#image",iconImageHref:"./images/content/map/pin.svg",iconImageSize:[66,76],iconImageOffset:[0,0],balloonContentLayout:(e=t.service,ymaps.templateLayoutFactory.createClass("<div>"+e.name+"</div>\n                <div>"+e.address+"</div>\n                <div>"+e.arr.map(function(e){return"<p>"+e.title+" "+e.tel+" "+e.schedule+"</p>"})+"</div>"))});n.events.add("click",function(){o&&o.options.set("iconImageHref","./images/content/map/pin.svg"),(o=n).options.set("iconImageHref","./images/content/map/pin-active.svg")}),n.events.add("balloonopen",function(e){s.innerHTML='<div class="b-map__content-inner">\n                                <div class="b-map__content-name">'+t.service.name+'</div>\n                                <div class="b-map__content-address">'+t.service.address+'</div>\n                                <div class="b-map__content-service">'+t.service.arr.map(function(e){return'<div class="b-map__contact">\n                                            <p class="b-map__service" >'+e.title+'</p>\n                                            <a class="b-map__tel" href="tel:'+e.tel.replace(/[\s\-\(\)]/g,"")+'" title='+e.tel+">"+e.tel+'</a>\n                                            <div class="b-map__time">'+e.schedule.map(function(e){return"<span>"+e+"</span>"}).join("")+"</div>\n                                        </div>"}).join("")+'</div>\n                                <a class="b-button b-button--dark b-button--min" href="tel:+79876543210" title="+7 (987) 654 32 10">\n                                    <span>Заказать звонок</span>\n                                    <i class="b-icon b-icon--btn icon-phone icon-phone--btn"></i>\n                                </a>\n                            </div>'}),i.geoObjects.add(n)})})}),n=document.querySelector(".js-burger-btn"),a=document.querySelector(".js-burger"),c=document.querySelector(".b-page-wrapper"),r=document.querySelector(".js-close-burger"),l=document.querySelector(".js-close-btn"),n.addEventListener("click",function(){a.classList.toggle("open"),a.classList.contains("open")?c.style.overflow="hidden":c.style.overflow="auto"}),r.addEventListener("click",function(){a.classList.remove("open"),c.style.overflow="auto"}),l.addEventListener("click",function(){a.classList.remove("open"),c.style.overflow="auto"}),document.querySelectorAll(".js-slider").forEach(function(e){var n,t=void 0,i=e.querySelector(".b-swiper-pagination");function o(){n=new Swiper(e,{speed:500,loop:!0,spaceBetween:18,slidesPerView:1,pagination:{el:i,clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:20}}}),t=!0}window.innerWidth<1024&&o(),window.addEventListener("resize",function(){1024<=window.innerWidth&&t&&(n.destroy(),t=!1),window.innerWidth<1024&&!t&&(o(),t=!0)})})});