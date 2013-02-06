/*
 * The main controller
 */

'use strict';

define(
  [
    './../views/mainView',
    './../utils/applicationControllers',
    './../utils/resizeHandler',
    'jquery'
  ],

  function(mainView, controllers, resizeHandler, $) {
    // Constructor
    var MainController = function() {
      // Watch header and #main element if window resizes.
      var $resizeNodes = mainView.$header.add(mainView.$el);
      resizeHandler.watch($resizeNodes);
    },

    renderViewControllers = function() {
      // Render all view controllers, add them to mainView
      _.each(controllers.viewControllers, function(controller) {
        mainView.$el.append(controller.render().$el);
      });
      
      mainView.render();
    };

    // Public methods
    MainController.prototype = {
      constructor: MainController,

      render: function() {
        // When all controllers is loaded, render the view controllers.
        $.when(controllers.promises).done(renderViewControllers);

        return this;
      }
    };

    return new MainController();
  }
);