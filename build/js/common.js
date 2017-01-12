$(document).ready(function () {

    (function () {
        var toggleBtn = $('.js-hamburger'),
            nav = $('.js-nav');

        toggleBtn.on('click', function () {
            $(this).toggleClass('is-active');
            nav.toggleClass('is-active');
        });

        $(window).resize(function () {
            toggleBtn.removeClass('is-active');
            nav.removeClass('is-active');
        });
    })();

    // fixed header & nav scrolling
    (function () {
        var header = $('.js-header');
            nav = $('.js-nav'),
            navItem = nav.children();

        navItem.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');

            $('html, body').animate({scrollTop: $(el).offset().top - 110}, 1200);

        });

        initFixedHeader();

        $(window).resize(function () {
            initFixedHeader();
        });

        function initFixedHeader() {
            if ($(window).width() >= 768) {
                header.addClass('header--fixed');
            } else {
                header.removeClass('header--fixed');
            }
        }

    })();

    // nav scroll
    // (function () {
    //     var nav = $('.js-nav'),
    //         navItem = nav.children(),
    //         header = $('.js-header');
    //
    //     navItem.on('click', function (e) {
    //         e.preventDefault();
    //         var el = $(this).attr('href');
    //
    //         $('html, body').animate({scrollTop: $(el).offset().top - 110}, 1200);
    //
    //     });
    //
    //     $(window).resize(function () {
    //         initFixedHeader();
    //     });
    //
    //     function initFixedHeader() {
    //         if ($(window).width() >= 1024) {
    //             $('.js-header').addClass('header--fixed');
    //         } else {
    //             header.removeClass('header--fixed');
    //         }
    //     };


    // else {
    //     $('html, body').animate({scrollTop: $(el).offset().top -142}, 1200);
    //     return false;
    // }
    // add scroll >= 1024 and fix header else only scroll
    // })();
    // nav mobile
    // (function() {
    //     var toggleBtn = $('.js-hamburger'),
    //         nav = $('.js-nav'),
    //         scrollBtn = $('.js-scroll-btn');
    //
    //     toggleBtn.on('click', function() {
    //         $(this).toggleClass('is-active');
    //         nav.toggleClass('is-active');
    //     });

    // initNavTransition();

    // $(window).resize(function() {
    //     initNavTransition();
    //     toggleBtn.removeClass('is-active');
    //     nav.removeClass('is-active');
    // });

    // function initNavTransition() {
    //     if ($(window).width() <= 479) {
    //         nav.css('transition', 'all 0.5s');
    //     } else {
    //         nav.css('transition', 'none');
    //     }
    // }
    // })();

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
            callPopupInner = $('.call-me__popup-inner'),
            callPopup = $('.js-call-popup'),
            header = $('.js-header');

        callPopup.click(function (event) {
            if ($(event.target).children(callPopupInner).length) {
                if (callPopup.is(":visible")) {
                    callPopup.fadeOut();
                    $('html').removeClass('is-locked');
                    header.removeClass('is-locked--header');
                }
            }
        });

        callBtn.on('click', function (e) {
            e.preventDefault();

            $(this).next(callPopup).fadeIn();
            $('html').addClass('is-locked');
            header.addClass('is-locked--header');

        });

        callClose.on('click', function (e) {
            e.preventDefault();

            $(this).parents().find(callPopup).fadeOut();
            $('html').removeClass('is-locked');
            header.removeClass('is-locked--header');
        });
    })();

    // portfolio gallery
    $('.js-portfolio-pics').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                tPrev: 'Предыдущее фото',
                tNext: 'Следующее фото',
                tCounter: '%curr% из %total%'
            }
            // callbacks: {
            //
            //     buildControls: function() {
            //         // re-appends controls inside the main container
            //         this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            //     }
            //
            // }
        });
    });

    // screen slider
    $('.js-screen-slider').slick({
        fade: true,
        dots: false,
        arrows: true,
        infinite: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2300,
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
