'use strict';

define(
  [
    'webfont',
    'jquery'
  ],

  function(webfont, $) {
    
    var webFontDeferred = new $.Deferred();

    webfont.load({
      google: {
        families: [
          'Cantarell',
          'Droid+Serif',
          'Lato:100:latin'
        ]
      },
      active: function() {
        webFontDeferred.resolve();
      }
    });

    return {
      promise: webFontDeferred
    };
  }
);