module.exports = function(req, res, next) {
	console.log("sending master page", req.method, req.path);
	res.sendFile('./client/build/index.html', {root: __dirname + '/../../'});
};