'use strict';

define(
  [
    'jquery',
    'underscore'
  ],

  function($, _) {
    var $resizeNodes,
        $window = $(window),
    
    ResizeHandler = function(args) {
      if (!_.isObject(args)) {
        throw 'Expected object literal';
      }

      _.extend(this, args);
    };

    ResizeHandler.prototype = {
      constructor: ResizeHandler,

     /*
      * Nodes to watch
      */
      watch: function($nodes) {
        if (!($nodes instanceof $)) {
          throw 'expected jQuery node';
        }

        $resizeNodes = $nodes.addClass('defaultwidth');

        // Add event handler to window resize, and trigger the event.
        $window.on('resize', $.proxy(this.onresize, this)).trigger('resize');
      },

      /*
       * Handle window resize event
       */
      onresize: function(e) {
        var width = $window.width();

        if (width < this.maxWidth) {
          this.handleSmallerThan.call($resizeNodes);
          return;
        }
        
        if (!$resizeNodes.hasClass('defaultwidth')) {
          this.handleBiggerThan.call($resizeNodes);
        }
      },

      /*
       * When the window is smaller than the watched width.
       */
      handleSmallerThan: function() {
        $resizeNodes.removeClass('defaultwidth').addClass('minwidth');
      },

      /*
       * When the window is bigger than the watched width.
       */
      handleBiggerThan: function() {
        $resizeNodes.addClass('defaultwidth').removeClass('minwidth');
      }
    };

    return ResizeHandler;
  }
);