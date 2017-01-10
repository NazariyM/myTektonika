$(document).ready(function() {

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
        var myLatLng = [56.01421991876897, 37.552129938990376];
        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: myLatLng,
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Русский Терем'
                });
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
        }
    })();

    // (function () {
    //     var myLatLng = [56.01421991876897, 37.552129938990376],
    //         myPlacemark = new YMaps.Placemark(new YMaps.GeoPoint(56.014036705382004, 37.55207205754845));
    //     YMaps.ready(initMap);
    //     var myMap;
    //
    //     myPlacemark.name = "Москва";
    //     myPlacemark.description = "Столица Российской Федерации";
    //
    //     function initMap() {
    //         myMap = new YMaps.Map("map", {
    //             center: myLatLng,
    //             zoom: 15
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //
    //         // map.addOverlay(myPlacemark);
    //         // myMap.behaviors.disable('scrollZoom');
    //         // myMap.controls.remove('searchControl');
    //         // myMap.controls.remove('trafficControl');
    //         // myMap.controls.remove('typeSelector');
    //         // myMap.controls.remove('fullscreenControl');
    //     }
    // })();

});
