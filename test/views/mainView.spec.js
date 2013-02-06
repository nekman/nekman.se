require('../testUtils').setup();

describe('main view', function() {
	var mainView = require('../../js/views/mainView');

	describe('loading', function() {
		var $loading = mainView.$el.find('#loading');

		it('should show the loading before rendering', function() {
			expect($loading.css('display')).toBe('');
			expect($loading.text()).toMatch(/Loading content/);
		});

		it('should hide the loading after rendering', function() {
			mainView.render();

			expect($loading.css('display')).toBe('none');
		});
	});
});

