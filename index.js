var express = require('express');
var app = express();
var middlewares = require('./server/middlewares');
var router = require('./server/router');

app.use(express.static(__dirname + '/client/build'));
app.use(router);
app.get('*', middlewares.master);
 
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started at port ' + port + '..');