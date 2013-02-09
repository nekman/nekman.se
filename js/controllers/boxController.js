'use strict';

define(
  [
    './../views/boxView',
    './../collections/boxCollection',
    'jquery',
    'underscore'
  ],

  function(BoxView, BoxCollection, $, _) {

    var boxCollection = new BoxCollection(),

    BoxController = function() {
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
  }
);