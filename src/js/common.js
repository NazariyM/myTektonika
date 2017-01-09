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

});
