/*
 * Setup globals for testing.
 */
exports.setup = function() {
	global.define = require('define');
	//fake browser window
	global.window = require('jsdom').jsdom().createWindow();
	global.jQuery = global.$ = require('jquery');
};

