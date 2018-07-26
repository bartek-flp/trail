(function ($) {
  'use strict';

  Drupal.behaviors.d_p_main_slider = {
    attach: function (context, settings) {

      // Slick.

      $('.paragraph--type--slider-big .field__items').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false
      });






    }
  };
  
})(jQuery);