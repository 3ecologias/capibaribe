// var app = require('express').createServer();

var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/tumblr', function (req, res) {
  res.sendfile(__dirname + '/tumblr.html');
});

// app.get('/tumblr', function (req, res) {
//   res.sendfile(__dirname + '/blog.html');
// });

app.get('/tumblr-api', function (req, res) {
  res.sendfile(__dirname + '/assets/js/jquery.tumblr-kit.min.js');
});

app.get('/*.(js|css|png|jpg)', function(req, res){
  res.sendfile(__dirname + '/assets'+req.url);
});

// app.post('/tumblr', function(req, res){
// 	var obj = {};
// 	console.log('body: ' + JSON.stringify(req.body));
// 	res.sendfile(__dirname + '/tumblr.html');
// 	// res.send(req.body);
// });

app.listen(80);
