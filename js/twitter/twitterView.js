define('twitterView', ['jquery', 'underscore', 'backbone', 'twitterEntities'], function($, _, Backbone, twitterEntities) {
  'use strict';
  
  return Backbone.View.extend({
    el: '#tweets',

    render: function() {
      
      this.$el.append(
        $('<div>').addClass('tweet')
                  .html(twitterEntities.linkify(this.model)));

      return this;
    }
  });
});
