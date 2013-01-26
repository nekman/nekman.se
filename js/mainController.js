/*
  Main app
*/
define('mainController', ['webfont', 'controllers', 'jquery'], function(webfont, controllers, $) {
  var $header = $('h1'),
      $loading = $('<div>')
                  .append($('<i>').addClass('icon-spinner icon-spin'))
                  .append(' Loading content... '),
      webFontDeferred = new $.Deferred(),

  MainController = function() {
    this.$el = $('#main').append($loading);

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

    controllers.promises.push(webFontDeferred);
  };

  MainController.prototype = {
    constructor: MainController,

    render: function() {
      var $el = this.$el,

      internalRender = function() {
        controllers.all.forEach(function(controller) {
          $el.append(controller.render().$el);
        });

        $loading.hide();
        $header.show();
      };

      $.when(controllers.promises).done(internalRender);
    }
  };

  return new MainController();
});