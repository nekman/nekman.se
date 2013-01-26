define('twitterView', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';
  
  return Backbone.View.extend({
    el: '#tweets',

    render: function() {
      this.$el.append(
        $('<div>').addClass('tweet')
                  .text(this.model.text));

      return this;
    }
  });
});
