var express = require('express');
var app = express();
var middlewares = require('./server/middlewares');
var router = require('./server/router');

app.use(express.static(__dirname + '/client/build'));
app.use(router);
app.get('*', middlewares.master);
 
app.listen(8080);
console.log('server started at port 8080..');