module.exports = function(req, res, next) {
	res.sendFile('./client/build/index.html', {root: __dirname + '/../../'});
};