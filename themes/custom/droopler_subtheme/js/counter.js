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



    }
  };

  Drupal.behaviors.menuSubmenu = {
    attach: function (context, settings) {

      var $windowWidth = $(window).width();
      var $link = $('header .nav-item ul.dropdown-menu li.dropdown-item');

      if ($windowWidth > 1023) {
        $link.mouseover(function () {
          var $width = $(this).find('ul.dropdown-menu').width();
          $(this).find('ul.dropdown-menu').css('top', '0');
          $(this).find('ul.dropdown-menu').css('left', -$width);
        });
      }

    }
  };

})(window.jQuery, window.Drupal);