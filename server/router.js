var router = require('express').Router();

router.use(function(req, res, next) {
	console.log('api request', req.path);
	next();
});

router.get('/api/ping', function(req, res, next) {
	res.json({ping: 'ok'});
});

module.exports = router;
