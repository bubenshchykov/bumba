var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var db;

module.exports = function(req, res, next) {
	if (db) {
		req.db = db;
		return next();
	}

	console.log('connecting to db..');
	MongoClient.connect('mongodb://localhost:27017/bumba', function(err, _db) {
		if (err) {
			return console.error('cant connect to mongo', err);
		}
		db = _db;
		req.db = db;
		next();
	});
};