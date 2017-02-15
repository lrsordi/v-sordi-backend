var async = require('async'),
	keystone = require('keystone');

var Categories = keystone.list('Categories');

/**
 * List Posts
 */
exports.list = function(req, res) {
	Categories.model.find({}).sort({sortOrder:'asc'}).exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		res.apiResponse(items);
	});
}
