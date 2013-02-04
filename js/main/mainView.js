/*
 * The main view
 */

'use strict';

define(

  [
    'jquery',
    'underscore',
    'backbone'
  ],
  
  function($, _, Backbone) {
  
    //TODO: Backbone.Model
    var mainModel = {
      name: '@nekman',
      year: 2013,
      texts: {
        loading: ' Loading content... '
      }
    },

    MainView = Backbone.View.extend({
      el: '#main',

      initialize: function() {
        this.$header = $('header');
        this.$footer = $('<footer>').append($('<span>').text(this.model.name + ' - ' + this.model.year));
        this.$loading =  $('<div id="loading">').append($('<i>')
                .addClass('icon-spinner icon-spin icon-4x'))
                .append(this.model.texts.loading);

        this.$el.append(this.$loading);
      },

      render: function() {
        this.$loading.hide();

        // Show header and footer
        this.$header.show();
        this.$el.after(this.$footer);

        return this;
      }
    });

    return new MainView({ model: mainModel });
  }
);