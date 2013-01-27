/*
 * The main controller
 */
define('mainController', ['webfont', 'controllers', 'jquery'], function(webfont, controllers, $) {
  // Private variables
  var DEFAULT_WIDTH = 960,
    $window = $(window),
    $header = $('h1'),
    $loading = $('<div>')
                  .append($('<i>').addClass('icon-spinner icon-spin'))
                  .append(' Loading content... '),

  // Constructor
  MainController = function() {
    this.$el = $('#main')
                .addClass('defaultwidth')
                .append($loading);

    // Resize header and #main. Store them in memory.
    this.$resizeNodes = $('header').addClass('defaultwidth').add(this.$el);
  },

  // Handle resize
  onresize = function() {
    var width = $window.width();
    
    if (width < DEFAULT_WIDTH) {
      this.$resizeNodes.removeClass('defaultwidth').addClass('minwidth');
      return;
    }

    if (!this.$resizeNodes.hasClass('defaultwidth')) {
      this.$resizeNodes.addClass('defaultwidth').removeClass('minwidth');
    }
    
  };

  // Public methods
  MainController.prototype = {
    constructor: MainController,

    render: function() {
      window.onresize = $.proxy(onresize, this);
      $window.trigger('resize');

      var $el = this.$el,

      internalRender = function() {
        _.each(controllers.viewControllers, function(controller) {
          $el.append(controller.render().$el);
        });

        $loading.hide();
        $header.show();
      };

      // When all promises is resloved, render all views.
      $.when(controllers.promises).done(internalRender);
    }
  };

  return new MainController();
});