var async = require('async'),
	keystone = require('keystone');

var Albums = keystone.list('Albums');

/**
 * List Posts
 */
exports.list = function(req, res) {
	Albums.model.find({}).exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		res.apiResponse(items);
	});
}
