/*
 * Collection of all controllers (except the main controller).
 *
 * Makes it easier to run same methods on all controllers.
 */
define([
  './twitter/twitterController',
  './fontController',
  './stackexchange/stackExchangeController',
  './social/boxController',
  'underscore'
  ], function() {
  'use strict';

  var args = Array.prototype.slice.call(arguments), // convert arguments to array
      _ = args.pop(), //Last argument = underscore
      controllers = args; // rest of the array = controllers

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
