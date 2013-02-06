'use strict';

define(
	[
		'jquery'
	],

	function($) {
		var DEFAULT_WIDTH = 960,
			$window = $(window),
			$resizeNodes,
		
		// Handle resize
		onresize = function() {
			var width = $window.width();
			
			if (width < DEFAULT_WIDTH) {
				$resizeNodes.removeClass('defaultwidth').addClass('minwidth');
				return;
			}
			
			if (!$resizeNodes.hasClass('defaultwidth')) {
				$resizeNodes.addClass('defaultwidth').removeClass('minwidth');
			}
		};

		return {
			watch: function($nodes) {
				if (!($nodes instanceof $)) {
					throw 'expected jQuery node';
				}

				$resizeNodes = $nodes.addClass('defaultwidth');

				// Add event handler to window resize, and trigger the event.
				$window.on('resize', onresize).trigger('resize');
			}
		};
	}
);