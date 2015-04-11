require.config({
  baseUrl: "/BasepackageHTML/scripts",
  paths: {
    "windowScroll": "plugins/windowscroll",
    "imagesLoaded": "plugins/jquery.imagesloaded.pkgd.min"
  },
  shim: {
    "windowScroll": {
      "deps": ["jquery"] 
    },
    "imagesLoaded": {
      "deps": ["jquery"]
    }
  }
});

/**
*  main.js
*  Requires: jQuery
*  Copyright 2015 Ph.Creative
**/
define(['jquery', 'windowScroll', 'imagesLoaded'], function ($) {
  'use strict';
  var $container = $('.header').imagesLoaded( function() {  
  
    var $nav = $('#js-nav-collapse'),
        navOffsetTop = $nav.offset().top;

    var transform3d = $('html').hasClass('no-csstransforms3d');
    
      $(document).on('wscroll', function (e) {
      var top = e.originalEvent.scrolltop;
      var transform = transform3d ? 'translate(0, ' + (top - navOffsetTop) + 'px)' : 'translate3d(0, ' + (top - navOffsetTop) + 'px, 0)';

      if (Modernizr.mq('(min-width: 768px)')) {
        if (top >= navOffsetTop) {
          $nav.css({
            transform: transform
          });
        } else {
          $nav.css({
            transform: ''
          });
        }
      }
    });
    $(window).on('resize', function () {
      navOffsetTop = $nav.offset().top;
      
      if (!Modernizr.mq('(min-width: 768px)')) {
        $nav.css({
          transform: ''
        });
      }
    });

  });

  

});
