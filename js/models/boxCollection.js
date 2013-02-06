/*
 * Box collection
 */

define(
	[
		'underscore',
		'backbone'
	],

	function(_, Backbone) {
		var BoxCollection = Backbone.Collection.extend({
			url : 'data/social.json'
		});

		return new BoxCollection();
	}
);