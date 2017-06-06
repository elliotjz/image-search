const GoogleImages = require('google-images');

let cseId = '001981848172088204799:k_fo3dkd08w';
let apiKey = 'AIzaSyAPvwEaQVM8sYED1ea6azG4cF-u7kF8IJ4';
const client = new GoogleImages(cseId, apiKey);

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/routes/index.html');
	})

	app.get('/api/*', function(req, res) {
		let searchQuery = req.params[0];
		let offset = req.query.offset || 10;
		let resJSON = [];
		client.search(searchQuery, {page: offset})
			.then(function(images) {
				console.log("images.length: " + images.length);
				console.log("images[0].type: " + images[0].type);

				for (let i = 0; i < images.length; i++) {
					resJSON.push({
						url: images[i].url,
						snippet: images[i].description,
						thumbnail: images[i].thumbnail.url,
						context: images[i].parentPage
					})
				}
				res.json(resJSON);
			});
	})

	app.use(function(req, res, next) {
	    res.status(400);
	    res.end('404: File Not Found');
	});
}


/*
<script>
  (function() {
    var cx = '001981848172088204799:k_fo3dkd08w';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
*/