const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const router = new express.Router();

app.use(express.static('public'));

router.use(function(req, res, next) {
	console.log('router is happening here');
	next();
});

router.get('/', (req, res) => {
	res.sendFile(__dirname + '/app/index.html');
});

app.use('/', router);

app.listen(port, err => {
	if(err) {
		res.send(err);
	} else {
		console.log('Good stuff is happening on port ' + port);
	}
});
