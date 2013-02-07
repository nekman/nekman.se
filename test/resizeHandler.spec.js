describe('resize handler', function() {
	require('./testUtils').setup();
	
	var ResizeHandler = require('../js/utils/resizeHandler'),
		resizeHandler = new ResizeHandler({ maxWidth : 960 }),
		$window = $(window),
		$node;
				
	beforeEach(function() {
		$node = $('<div>');
	});

	it('throws if node != instanceof jQuery', function() {
		var $el = [];
		expect(function() { resizeHandler.watch($el); }).toThrow();
	});

	describe('window.width is > 960px', function () {
		it('adds .defaultwidth to nodes that are watched', function() {
			resizeHandler.watch($node);

			expect($node.hasClass('defaultwidth')).toBe(true);
		});
	});
	
	describe('resize window', function() {
		it('adds .minwidth if window width < 960px', function() {
			resizeHandler.watch($node);

			// Override jQuery.width()
			$.fn.width = function() {
				return 400;
			};

			// Trigger the window.resize event
			console.log('trigger resize!')
			$window.trigger('resize');

			expect($node.hasClass('minwidth')).toBe(true);
		});
	});
});

