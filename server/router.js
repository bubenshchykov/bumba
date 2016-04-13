var router = require('express').Router();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var middlewares = require('./middlewares')

router.use(logger, middlewares.reqDb);

router.get('/api/ping', function(req, res, next) {
	res.json({ping: 'ok'});
});

router.get('/api/clients', function(req, res, next) {
	req.db.collection('clients').find().toArray(function(err, clients) {
		res.json(clients);
	});
});

router.delete('/api/clients/:id', function(req, res, next) {
	req.db.collection('clients').findAndRemove(
		{_id: mongodb.ObjectId(req.params.id)}, function(err, data) {
		res.sendStatus(204);
	});
});

router.post('/api/clients', 
	bodyParser.json(),
	function(req, res, next) {
		req.db.collection('clients').insert(req.body, function(err, client) {
			res.json(client.ops[0]);
		});
	}
);

function logger(req, res, next) {
	req.logId = Date.now();
	next();
}

module.exports = router;
