define('twitterController', ['twitterView', 'jquery', 'underscore'], function(TwitterView, $, _) {
  'use strict';

  return {
    $el: $('<section>').attr({ id: 'tweets' }),

    promise: $.ajax({
      url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=nekman&include_entities=true',
      dataType: 'jsonp'
    }),

    render: function() {
      this.$el.append($('<h4>').text('Latest tweets'));

      $('#main').append(this.$el);

      this.promise.done(function(tweets) {
        _.each(_.first(tweets, 3), function(tweet) {
          var view = new TwitterView({ model : tweet });
          view.render();
        });
      });

      return this;
    }
  };
});