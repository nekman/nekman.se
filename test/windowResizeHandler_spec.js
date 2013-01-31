describe('window resize handler', function() {
	require('./testUtils').setup();
	
	var sut = require('../js/windowResizeHandler'),
		$window = $(window),
		$node;
				
	beforeEach(function() {
		$node = $('<div>');
	});

	it('should throw if node != instanceof jQuery', function() {
		var $el = [];
		expect(function() { sut.watch($el); }).toThrow();
	});

	it('should add .defaultwidth to nodes that are watched', function() {
		sut.watch($node);

		expect($node.hasClass('defaultwidth')).toBe(true);
	});

	describe('resize window', function() {
		it('should add .minwidth if window width < 960px', function() {
			sut.watch($node);

			// Override jQuery.width()
			$.fn.width = function() {
				return 400;
			};

			// Trigger the window.resize event
			$window.trigger('resize');

			expect($node.hasClass('minwidth')).toBe(true);
		});
	});
});
