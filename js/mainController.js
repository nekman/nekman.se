/*
 * The main controller
 */
define('mainController', ['webfont', 'controllers', 'jquery', 'windowResizeHandler'], function(webfont, controllers, $, resizeHandler) {
  // Private variables
  var isIE = !$.support.cssFloat,
      // TODO: Refactor. Use Underscore.js template
      $header = $('header'),
      $footer = $('<footer>').append($('<span>').text('@nekman - 2013'));
      $loading = $('<div>')
                  .append($('<i>').addClass('icon-spinner icon-spin icon-4x'))
                  .append(' Loading content... '),

  // Constructor
  MainController = function() {
    this.$el = $('#main').append($loading);
    
    // Only show gitub-ribbon for none IE-browsers, since they can't handle the element CSS-rotation.
    $('div.ribbon')[isIE ? 'hide' : 'show']();

    // Watch header and #main element if window resizes.
    var $resizeNodes = $header.add(this.$el);
    resizeHandler.watch($resizeNodes);
  };

  // Public methods
  MainController.prototype = {
    constructor: MainController,

    render: function() {
      var $el = this.$el,

      renderViewControllers = function() {
        // Render all view controllers
        _.each(controllers.viewControllers, function(controller) {
          $el.append(controller.render().$el);
        });
        
        $loading.hide();

        // Show header and footer
        $header.show();
        $el.after($footer);
      };
      
      // When all controllers is loaded, render the view controllers.
      $.when(controllers.promises).done(renderViewControllers);
    }
  };

  return new MainController();
});