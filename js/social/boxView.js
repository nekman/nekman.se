'use strict';

define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],

  function($, _, Backbone) {
    
    var template = _.template('icon-<%= name %> icon-4x'),

    getIcon = function(name) {
      return template({ name: name.toLowerCase() });
    };

    return Backbone.View.extend({
      tagName: 'div',
      className: 'box',

      events: {
        click : 'click',
        tap : 'click'
      },

      render: function() {
          var model = this.model.attributes;

          this.$el.css({ backgroundColor : model.color })
                  .append($('<h4>').text(model.name))
                  .append($('<div>').addClass(getIcon(model.icon || model.name)));

          return this;
      },

      click: function() {
        location.href = this.model.get('url');
      }
    });

  }
);