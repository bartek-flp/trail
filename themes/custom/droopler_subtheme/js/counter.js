(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.countdown = {
    attach: function (context, settings) {

      $('#clock').countdown('2018/10/24', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="item">%D <div class="desc">dni</div></div> '
          + '<div class="item">%-H <div class="desc">godzin</div></div> '
          + '<div class="item">%M <div class="desc">minut</div></div> '
          + '<div class="item">%S <div class="desc">sekund</div></div>'));
      });

      // $('#clock').countdown('2020/10/10', function(event) {
      //   $(this).html(event.strftime('%D days %H:%M:%S'));
      // });


    }
  };

})(window.jQuery, window.Drupal);