$(document).ready(function () {

    // Clear placeholder
    (function () {
        var el = $('input, textarea');
        el.focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    })();

    // call me popup

    (function () {
        var callBtn = $('.js-call-btn'),
            callClose = $('.js-call-popup-close'),
            callPopup = $('.js-call-popup');

        callBtn.on('click', function (e) {
            e.preventDefault();

            $(this).next(callPopup).fadeIn();

        });

        callClose.on('click', function (e) {
            e.preventDefault();

            $(this).parents().find(callPopup).fadeOut();
        });

    })();

    // portfolio gallery
    $('.js-portfolio-pics').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // screen slider
    $('.js-screen-slider').slick({
        fade: true,
        dots: false,
        arrows: true,
        infinite: true,
        draggable: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="screen-slider__arrow screen-slider__arrow--prev icon-arrow"></i>',
        nextArrow: '<i class="screen-slider__arrow screen-slider__arrow--next icon-arrow"></i>'
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     }
        // ]
    });

    // top scroll
    (function () {
        $('.js-scroll-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    })();

    // map

    (function () {
        var myLatLng = [56.01117090192192, 37.54865651284954];
        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: myLatLng,
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
                myPlacemark = new ymaps.Placemark([56.01405587269873, 37.552094416412814], {
                    balloonContentHeader: "ООО «ПСК Тектоника»",
                    balloonContentBody: "МО, Дмитровское шоссе, дер. Еремино, д. 100. офис 11.",
                    balloonContentFooter: "www.tektonika-psk.ru",
                    hintContent: "Мы здесь!"

                }, {
                    iconColor: "#F6AF47"
                });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
        }
    })();

});
