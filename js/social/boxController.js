define('boxController', ['boxView', 'boxCollection', 'jquery', 'underscore'], function(BoxView, boxCollection, $, _) {
  'use strict';

  var BoxController = function() {
    this.promise = boxCollection.fetch();
    this.$el = $('<section>').attr({id : 'social'});
  },

  appendBox = function(boxModel) {
    var boxView = new BoxView({ model: boxModel });
    this.$el.append(boxView.render().el);
  };

  BoxController.prototype = {
    constructor: BoxController,

    render: function() {
      var self = this;

      this.promise.done(function() {
        boxCollection.forEach($.proxy(appendBox, self));
      });

      return this;
    }
  };

  return new BoxController();
});