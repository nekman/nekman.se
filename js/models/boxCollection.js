/*
 * Box collection
 */

define(
  [
    'underscore',
    'backbone'
  ],

  function(_, Backbone) {
    return Backbone.Collection.extend({
      url : 'data/social.json'
    });
  }
);