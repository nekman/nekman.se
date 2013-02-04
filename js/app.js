/*!
  nekman.se - http://github.com/nekman/nekman.se
*/
'use strict';

// RequireJS configuration
require.config({
  paths: {
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min',
    backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.9/backbone-min',
    webfont: 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont'
  },
  // Use RequireJS 'shim' to set the configuration for scripts that are not AMD compatible.
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: 'jQuery'
    },
    webfont: {
      exports: 'WebFont'
    }
  }
});

// The "main method".
require(['main/mainController'], function(mainController) {
    mainController.render();
});
