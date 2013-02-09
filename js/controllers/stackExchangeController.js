'use strict';

define(
  [
    './../views/stackExchangeView',
    './../collections/jsonpCollection',
    'jquery',
    'underscore'
  ],

  function(StackExchangeView, JSONPCollection, $, _) {

    var StackExchangeController = function() {
      var collection = new JSONPCollection({
        url: 'http://api.stackoverflow.com/1.1/users/141363/answers?pagesize=5',
        jsonp: 'jsonp'
      });

      this.promise = collection.fetch();
    };

    StackExchangeController.prototype = {
      $el: $('<article>').attr({ id: 'stackexchange' }),

      render: function() {
        
        this.promise.done(function(all) {
          var view = new StackExchangeView({
            model: {
              answers: _.first(all.answers, 5),
              title: 'Latest answers on stackoverflow'
            }
          });

          view.render();
        });

        return this;
      }
    };

    return new StackExchangeController();
  }
);