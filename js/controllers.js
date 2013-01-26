/*
 * All controllers
 */
define('controllers', function() {
  var controllers = [
    require('twitterController'),
    require('boxController')
  ];

  return {
    promises: controllers.map(function(controller) {
        return controller.promise;
    }),

    all: controllers
  };
});
