'use strict';

define(
	[
		'jquery',
		'underscore',
		'backbone',
		'text!./../../templates/stackExchange.html'
	],

	function($, _, Backbone, stackExhangeTemplate) {

		var compiled = _.template(stackExhangeTemplate);

		return Backbone.View.extend({
			el: '#stackexchange',

			render: function() {
				this.$el.append(compiled(this.model));

				return this;
			}
		});
	}
);