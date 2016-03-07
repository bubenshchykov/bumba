var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/api/*', function (req, res) {
  res.send('i am api');
});

app.get('*', function (req, res) {
  res.sendFile('./static/index.html', {root: __dirname});
});
 
app.listen(8080);