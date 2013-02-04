'use strict';

define(
	[
		'jquery',
		'underscore',
		'backbone'
	],

	function($, _, Backbone) {

		var compiled = _.template(
			'<div class="answer">'+
				'<b class="score <%= accepted ? "accepted" : "" %>">' +
					'<%= score %>' +
				'</b>'+
				'<a href="http://stackoverflow.com/questions/<%= question_id %>/#<%= answer_id %>">'+
					'<%= title %>'+
				'</a>'+
			'</div>'
		);

		return Backbone.View.extend({
			el: '#stackexchange',

			render: function() {
				this.$el.append(compiled(this.model));

				return this;
			}
		});
	}
);