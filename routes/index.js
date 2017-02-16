var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// app.all('/', function(req, res, next) {
	//   res.header("Access-Control-Allow-Origin", "*");
	//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
	//   next();
	//  });

	//  app.all('*', function(req, res, next) {
 // 	  res.header("Access-Control-Allow-Origin", "*");
 // 	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
 // 	  next();
 // 	 });


 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
 });
	// Views
	app.get('/api/about', keystone.middleware.api, routes.api.about.list);
	app.get('/api/generalcontacts', keystone.middleware.api, routes.api.generalcontacts.list);
	app.get('/api/categories', keystone.middleware.api, routes.api.categories.list);
	app.get('/api/albums', keystone.middleware.api, routes.api.albums.list);

}
