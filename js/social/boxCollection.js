/*Box collection */

define(
	[
		'underscore',
		'backbone'
	],

	function(_, Backbone) {

		var BoxModel = Backbone.Model.extend({}),

		BoxCollection = Backbone.Collection.extend({
			model: BoxModel,
			url : 'data/social.json'
		});

		return new BoxCollection();
	}
);