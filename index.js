var http = require('http');

var server = http.createServer(function (req, res) {
	console.log('im receiving request:', req.url);
	res.end('a mne pohui');
});

server.listen(8080, function(err, data) {
	err ?
		console.log('cant start server') :
		console.log('server started at port ' + 8080);
});