var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log(req.headers)
	res.send('Hello World!');
});

app.get('/form', function (req, res) {
	res.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/proc', function (req, res) {
	console.log(req.method);
	 // console.log("GET:", req.query);
	 // console.log("POST", req.body);
	 console.log(req.query["cooltext"]);
	 res.send('Got it!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});