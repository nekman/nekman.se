'use strict';

define(
  [
    './../lib/twitterEntities',
    './../collections/jsonpCollection',
    './../views/twitterView',
    'jquery',
    'underscore'
  ],

  function(twitterEntities, JSONPCollection, TwitterView, $, _) {
    
    var TwitterController = function() {
      var collection = new JSONPCollection({
        url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=nekman&include_entities=true'
      });

      this.promise = collection.fetch();
    };

    TwitterController.prototype = {
      $el: $('<article>').attr({ id: 'tweets' }),

      render: function() {

        this.promise.done(function(tweets) {
          
            var view = new TwitterView({
              model: {
                title: 'Latest tweets',
                tweets: _.first(tweets, 3),
                linkify: function(tweet) {
                  return twitterEntities.linkify(tweet);
                }
              }
            });

            view.render();
          
        });

        return this;
      }
    };

    return new TwitterController();
  }
);