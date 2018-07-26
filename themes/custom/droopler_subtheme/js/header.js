(function ($) {
  'use strict';

  Drupal.behaviors.fixed_menu = {
    attach: function (context, settings) {

      // Fixed menu.
      var isFront = $('body').hasClass('path-frontpage');
      var isGallery = $('body').hasClass('path-galleries');
      var $nav = $('header#header');
      var $navContainer = $('header#header .container');
      var $navItem = $('header#header .container .navbar-nav .nav-item a');

      if (isFront || isGallery) {
        $nav.removeClass('menu-relative');
        $nav.addClass('menu-fixed');
      }
      else {
        $nav.addClass('menu-relative');
        $nav.removeClass('menu-fixed');
      }

      // var $dropMenuItem = $('.navbar-nav .dropdown');
      //
      // $dropMenuItem.hover(function () {
      //   $(this).toggleClass("show");
      //   $(this).find('a').attr("aria-expanded", "true")
      // });

      $(document).on("scroll", function() {

        if($(document).scrollTop()>100) {
          $nav.removeClass("large").addClass("small");
          $navContainer.removeClass("large").addClass("small");
          $navItem.removeClass("large").addClass("small");
        }
        else {
          $nav.removeClass("small").addClass("large");
          $navContainer.removeClass("small").addClass("large");
          $navItem.removeClass("small").addClass("large");
        }

      });


    }
  };
})(jQuery);