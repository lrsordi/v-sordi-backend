var async = require('async'),
	keystone = require('keystone');

var Contacts = keystone.list('Contacts');

/**
 * List Posts
 */
exports.list = function(req, res) {
	Contacts.model.findOne(function(err, items) {
		if (err) return res.apiError('database error', err);
		res.apiResponse(items);
	});
}
