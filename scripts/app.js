require.config({
  baseUrl: "/BasepackageHTML/scripts",
  paths: {
    "jquery": "plugins/jquery",
    "modernizr": "plugins/modernizr",
    "affix": "bootstrap/affix",
    "alert": "bootstrap/alert",
    "button": "bootstrap/button",
    "collapse": "bootstrap/collapse",
    "dropdown": "bootstrap/dropdown",
    "modal": "bootstrap/modal",
    "popover": "bootstrap/popover",
    "scrollspy": "bootstrap/scrollspy",
    "tab": "bootstrap/tab",
    "tooltip": "bootstrap/tooltip",
    "transition": "bootstrap/transition",
    "owlcarousel": "plugins/owl.carousel.min",
    "wow": "plugins/wow.min",
    "select2": "plugins/select2.min",
    "matchHeight": "plugins/jquery.matchHeight.min",
    "isotope": "plugins/jquery.isotope.min",
    "imagesLoaded": "plugins/jquery.imagesloaded.pkgd.min",
    "bridget": "plugins/jquery.bridget",
    "magnific": "plugins/jquery.magnific-popup.min"
  },
  shim: {
    "jquery": {
      "exports": "$"
    },
    "main": {
      "deps": ["jquery"]
    },
    "affix": {
      "deps": ["jquery"]
    },
    "alert": {
      "deps": ["jquery"]
    },
    "button": {
      "deps": ["jquery"]
    },
    "collapse": {
      "deps": ["jquery", "transition"]
    },
    "dropdown": {
      "deps": ["jquery"]
    },
    "modal": {
      "deps": ["jquery"]
    },
    "popover": {
      "deps": ["jquery", "tooltip"]
    },
    "scrollspy": {
      "deps": ["jquery"]
    },
    "tab": {
      "deps": ["jquery"]
    },
    "tooltip": {
      "deps": ["jquery"]
    },
    "transition": {
      "deps": ["jquery"]
    },
    "owlcarousel": {
      "deps": ["jquery"]
    },
    "wow": {
      "deps": ["jquery"]
    },
    "select2": {
      "deps": ["jquery"]
    },
    "matchHeight": {
      "deps": ["jquery"]
    },
    "bridget": {
      "deps": ["jquery"]
    },
    "imagesLoaded": {
      "deps": ["jquery"]
    },
    "isotope": {
      "deps": ["jquery", "bridget", "imagesLoaded"]
    },
    "magnific": {
      "deps": ["jquery"]
    }
  }
});

// Require main.js
require(["modernizr", "main", "collapse", "dropdown"]);

require(['wow'], function () {             
  new WOW().init();
});
