/*
 *	View for stackoverflow answer
 */
'use strict';

define(
	[
		'text!./../../templates/stackExchange.html',
		'jquery',
		'underscore',
		'backbone'
	],

	function(stackExhangeTemplate, $, _, Backbone) {

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