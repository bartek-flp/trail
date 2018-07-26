(function ($) {
  'use strict';

  Drupal.behaviors.sponsor_slider= {
    attach: function (context, settings) {

      // Slick.

        $('.view-sponsors .view-content').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            infinite: true,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });






    }
  };
  
})(jQuery);