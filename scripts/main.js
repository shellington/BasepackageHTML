/**
*  main.js
*  Requires: jQuery
*  Copyright 2015 Ph.Creative
**/
var verticalAlign = function (e) {
    var $content = $(e);
 
    $content.css({
        top: ($(e).parent('.vertical-align').outerHeight() / 2) - ($content.outerHeight() / 2)
    });
};

define(['jquery'], function ($) {
  'use strict';

	var timer = '';

    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if ($('.vertical-align .content').length) {
            	$('.vertical-align .content').each(function() {
				  verticalAlign(this);
				});               
            }
        }, 500);
    }).trigger('resize');

	/* Closes any open separate (Bootstrap) collapsable items before opening the next one */
	$('.header').on('show.bs.collapse', function () {
	    var actives = $(this).find('.collapse.in'),
	        hasData;
	    
	    if (actives && actives.length) {
	        hasData = actives.data('collapse');
	        if (hasData && hasData.transitioning) {
	        	return;
	        }
	        actives.collapse('hide');
	        actives.data('collapse', null);
	    }
	});
	$('body').on('click', function (e) {
        if (!$('.navbar').is(e.target) && $('.navbar').has(e.target).length === 0 && $('.in').has(e.target).length === 0) {
            $('.navbar .navbar-collapse').removeClass('in');
            $('.navbar .navbar-toggle').addClass('collapsed');
        }
    });

	// select2: fancy multi select lists
    if ($('.js-select').length) {
        require(['select2'], function () {
            $('.js-select').select2({
				allowClear: true
			});
        });
    }

    // Match heights: by row
    if ($('.js-match-height').length) {
    	require(['matchHeight'], function () {
            $('.js-match-height').matchHeight();
        });	
    }

    // isotope
    if ($('#js-isotope-container').length) {
	    require(['isotope', 'bridget', 'imagesLoaded'], function () {
	      	var $container = $('#js-isotope-container').imagesLoaded( function() {	      	
		      	$container.isotope({
		          	// options
		          	itemSelector: '.js-isotope-item',
		          	layoutMode: 'masonry'
		      	});

		      	if ($('#js-filters a').length) {
					$('#js-filters a').click(function () {
						var selector = $(this).attr('data-filter');
					  	$container.isotope({ filter: selector });
					  	return false;
					}); 
				}
	      	});
	      	$(window).resize(function(){
		    	$container.isotope('bindResize');
			});
	    });
    }

    //lightbox: image
	if ($('.js-image-lightbox').length) {
	    require(['magnific'], function () {
	      $('.js-image-lightbox').magnificPopup({
			  delegate: 'a', // child items selector, by clicking on it popup will open
			  tLoading: 'Loading image #%curr%...',
			  type: 'image',
			  gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	          },
	          image: {
	            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	            titleSrc: function(item) {
	              return item.el.attr('title');
	            }
	          }
			});
	    });
    }

    //lightbox: video
	if ($('.js-video-lightbox').length) {
	    require(['magnific'], function () {
	      	$('.js-video-lightbox').magnificPopup({
		      	delegate: 'a', // child items selector, by clicking on it popup will open
				tLoading: 'Loading video #%curr%...',
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				gallery: {
		            enabled: true,
		            navigateByImgClick: true,
		            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		        }
			});
    	});
    }

    // brands carousel
    if ($('#js-brands-carousel').length) {
	  require(['owlcarousel'], function () {	    	     
	    $("#js-brands-carousel").owlCarousel({
	      items : 6,
	      itemsDesktop : [1199,6],
	      itemsDesktopSmall : [980,6],
	      itemsTablet: [768,4],
	      itemsTabletSmall: false,
	      itemsMobile : [479,2]
	    });
	  });
	}

	// mobile only carousel
    if ('.js-mobile-carousel') {
        require(['owlcarousel'], function () {
            $(window).resize(function () {
                    var owl = $('.js-mobile-carousel').data('owlCarousel');
                    if (Modernizr.mq('(max-width:767px)') && !owl) {
                        $('.js-mobile-carousel').owlCarousel({
                            navigation: true,
                            pagination: true,
                            slideSpeed: 300,
                            paginationSpeed: 400,
                            singleItem: true,
                            navigationText : false
                        });
                    } else if (Modernizr.mq('(min-width:768px)') && owl) {
                        owl.destroy();                       
                    } 
            }).trigger('resize');
        });
    }

// end doc ready	
});

