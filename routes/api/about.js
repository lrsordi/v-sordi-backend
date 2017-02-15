var async = require('async'),
	keystone = require('keystone');

var About = keystone.list('About');

/**
 * List Posts
 */
exports.list = function(req, res) {
	About.model.findOne(null, 'about_enus about_ptbr', function(err, items) {
		if (err) return res.apiError('database error', err);
		res.apiResponse(items);
	});
}
