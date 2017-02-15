// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

keystone.init({
	'name': 'Valéria Sordi - Backend',
	'brand': 'Valéria Sordi - Backend',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'compress':true,
	'cloudinary folders': true,
	'cloudinary secure': true,
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'back url' : '/keystone',
	'auth': true,
	'user model': 'User',
});
keystone.import('models');
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));
keystone.set('nav', {
	categories : 'categories',
	albums : 'albums',
	'General Configs' : {
		'About':
			{
				label: 'About',
				key: 'about-configs',
				path: 'abouts/58a3a6e2d8fc645c114dbc42'
			},
		'General Contacts':
			{
				label: 'General Contacts',
				key: 'general-configs',
				path: 'contacts/58a3a7c92655036f11ebc8a5'
			}
	},
	'Users': 'users'
});

keystone.start();
