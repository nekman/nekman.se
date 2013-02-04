/*
 * Setup globals for testing.
 */
exports.setup = function() {
	global.define = require('define');

	// Setup a fake browser window
	global.document = require('jsdom').jsdom('<html><body><div id="main"></div></body></html>');
	global.navigator = document.navigator;
	global.window = document.createWindow();

	// Setup jQuery, Underscore and Backbone
	global.jQuery = global.$ = require('jquery');
	global._ = require('underscore');
	global.Backbone = require('backbone');

	// Set Backbone DOM-library
	Backbone.$ = global.jQuery;
};

