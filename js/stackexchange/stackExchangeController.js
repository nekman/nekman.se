define('stackExchangeController', ['stackExchangeView', 'jquery', 'underscore'], function(StackExchangeView, $, _) {
  'use strict';

  return {
    $el: $('<section>').attr({ id: 'stackexchange' }),

    promise: $.ajax({
      url: 'http://api.stackoverflow.com/1.1/users/141363/answers?pagesize=5',
      dataType: 'jsonp',
      jsonp: 'jsonp'
    }),

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
});