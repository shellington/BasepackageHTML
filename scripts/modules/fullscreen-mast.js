var homeMastheadResize = function () {
    var height = 0;
    var $content = $('.home-masthead .content');

    if (Modernizr.mq('(min-width:768px)')) {
        if ($(window).outerHeight() < 500) {
            $('.home-masthead').addClass('small-window-height');
        }
        else {
            $('.home-masthead').removeClass('small-window-height');
        }  
    }
    if (Modernizr.mq('(min-width:992px)')) {
        if ($(window).outerHeight() < 600) {
            $('.home-masthead').addClass('small-window-height');
        }
        else {
            $('.home-masthead').removeClass('small-window-height');
        }  
    }
    if (Modernizr.mq('(min-width:1200px)')) {
        if ($(window).outerHeight() < 670) {
            $('.home-masthead').addClass('small-window-height');
        }
        else {
            $('.home-masthead').removeClass('small-window-height');
        }  
    }
    if ($content.outerHeight() > height) {
        height = $content.outerHeight();
    }
    height += 120;
    if (height < $(window).outerHeight()) {
        height = $(window).outerHeight();
    }
    
    /* the following line subtracts the header's height - to fill whole viewport just remove this line */ 
    height = height - ($('.header').outerHeight());

    $('.home-masthead').css({
        height: height
    });
    $content.css({
        top: ($('.home-masthead').outerHeight() / 2) - ($content.outerHeight() / 2)
    });
};

define(["jquery"], function ($) {
    "use strict";
    var timer = '';

    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (Modernizr.mq('(min-width:768px)')) {
                homeMastheadResize();
            }
            else {
                $('.home-masthead').css('height', '');
            }
        }, 500);
    }).trigger('resize');

});