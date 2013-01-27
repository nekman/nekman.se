/*
 * Collection of all controllers (except the main controller).
 * 
 * Makes it easier to run same methods on all controllers.
 */
define('controllers', ['underscore'], function(_) {
  'use strict';

  var controllers = [
    require('fontController'),
    require('twitterController'),
    require('stackExchangeController'),
    require('boxController')
  ];
  
  return {
    /*
     * The collection of all promises
     */
    promises: _.map(controllers, function(controller) {
      return controller.promise;
    }),

    /*
     * The collection of all controllers
     */
    all: controllers,

    /*
     * The collection of view controllers
     */
    viewControllers: _.filter(controllers, function(controller) {
      return typeof controller.render === 'function';
    })
  };
});
