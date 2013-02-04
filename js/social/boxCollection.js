define(['underscore', 'backbone'], function(_, Backbone) {
	'use strict';
	
	var BoxModel = Backbone.Model.extend({}),

	BoxCollection = Backbone.Collection.extend({
		model: BoxModel,
		url : 'data/social.json'
	});

	return new BoxCollection();
});