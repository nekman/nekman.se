/*!
  Full source @ http://github.com/nekman/nekman.se
*/
'use strict';

require.config({
    paths: {
      jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
      underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min',
      backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.9/backbone-min',
      webfont: 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont',
      boxView: 'social/boxView',
      boxCollection: 'social/boxCollection',
      boxController: 'social/boxController',
      twitterController: 'twitter/twitterController',
      twitterView: 'twitter/twitterView'
    },
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

require(['mainController'], function(mainController) {
    mainController.render();
});
