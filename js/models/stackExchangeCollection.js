
define(
	[
		'jquery',
		'underscore',
		'backbone'
	],

	function($, _, Backbone) {

		return Backbone.Collection.extend({

			initialize: function(args) {
				if (!args.userId) {
					throw 'userId is required!';
				}

				this.userId = args.userId;
				this.pageSize = args.pageSize || 5;
			},

			url: function() {
				return 'http://api.stackoverflow.com/1.1/users/' + this.userId + '/answers?pagesize=' + this.pageSize;
			},

			sync: function(method, model, options) {

				var params = _.extend({
					url: model.url(),
					dataType: 'jsonp',
					jsonp: 'jsonp'
				});

				return $.ajax(params, options);
			}
		});
	}
);
