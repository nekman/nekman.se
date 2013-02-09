'use strict';

define(
  [
    'text!./../../templates/twitterTemplate.html',
    'jquery',
    'underscore',
    'backbone'
  ],
  
  function(twitterTemplate, $, _, Backbone) {

    var compiled = _.template(twitterTemplate);

    return Backbone.View.extend({
      el: '#tweets',

      render: function() {
        this.$el.append(compiled(this.model));

        return this;
      }
    });
  }

);
