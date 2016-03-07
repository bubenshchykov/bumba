var express = require('express');
var app = express();

// common
console.log('starting..');

app.use(function(req, res, next) {
	setTimeout(function() {
		console.log('handler 1', req.path);
		next();	
	}, 0);	
});

app.use(function(req, res, next) {
	console.log('handler 2', req.path);
	next();
});

// api routes

app.get('/api/*', function (req, res) {
  res.send('i am api');
});

app.get('/master.html', function (req, res) {
  res.send('i am master');
});
 
app.listen(8080);
console.log('anuka');

