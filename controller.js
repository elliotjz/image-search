let $ = require('jQuery');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/routes/index.html');
	})

	app.get('/api/*', function(req, res) {
		let searchQuery = req.params[0];
		let offset = req.query.offset || 10;
		console.log("seachQuery: " + searchQuery);
		console.log("offset: " + offset);
		let url = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + searchQuery;
		$.getJSON(url, function(data) {
			res.json(data)
		})
	})

	app.get('/home', function(req, res) {
		res.end("home");
	})

	app.use(function(req, res, next) {
	    res.status(400);
	    res.end('404: File Not Found');
	});
}


