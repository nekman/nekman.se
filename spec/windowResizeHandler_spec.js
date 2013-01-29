var define = require('define');
//fake browser window
global.window = require('jsdom').jsdom().createWindow();
global.jQuery = global.$ = require('jquery');

describe('window resize handler', function() {
	var sut,
		$node,
		$window;
		
	beforeEach(function() {
		sut = require('../js/windowResizeHandler');
		$node = $('<div>');
		$window = $(window);
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

