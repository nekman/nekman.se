define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],

  function($, _, Backbone) {

    return Backbone.Collection.extend({

      /*
       * Extend the default AJAX-params.
       */
      initialize: function(options) {
        options && _.extend(this.params, options);
      },

      /*
       * Default parameters
       */
      params: {
        dataType: 'jsonp'
      },

      /* Override Backbone sync due to JSONP-request */
      sync: function(method, model, options) {       
        return $.ajax(this.params);
      }
    });
  }
);
