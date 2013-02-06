'use strict';

define(
  [
    './../lib/twitterEntities',
    'jquery',
    'underscore',
    'backbone'
  ],
  
  function(twitterEntities, $, _, Backbone) {

    return Backbone.View.extend({
      el: '#tweets',

      render: function() {
        
        this.$el.append(
          $('<div>').addClass('tweet')
                    .html(twitterEntities.linkify(this.model)));

        return this;
      }
    });
  }

);
