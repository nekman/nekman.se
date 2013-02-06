'use strict';

define(
  [
    './../views/stackExchangeView',
    './../models/stackExchangeCollection',
    'jquery',
    'underscore'
  ],

  function(StackExchangeView, StackExchangeCollection, $, _) {

    var StackExchangeController = function() {

      var stackExchangeCollection = new StackExchangeCollection({ userId : '141363' });
      this.promise = stackExchangeCollection.fetch();
    };

    StackExchangeController.prototype = {
      $el: $('<section>').attr({ id: 'stackexchange' }),

      render: function() {
        this.$el.append($('<h4>').text('Latest answers on stackoverflow'));

        $('#main').append(this.$el);

        this.promise.done(function(all) {
          _.each(_.first(all.answers, 5), function(answer) {
            var view = new StackExchangeView({ model : answer });
            view.render();
          });
        });

        return this;
      }
    };

    return new StackExchangeController();
  }
);