// var app = require('express').createServer();

var express = require("express");
var app = express();
var Syslog = require("node-syslog");

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/tumblr', function (req, res) {
  res.sendfile(__dirname + '/tumblr.html');
});

// app.get('/tumblr', function (req, res) {
//   res.sendfile(__dirname + '/blog.html');
// });

// app.get('/tumblr-api', function (req, res) {
//   res.sendfile(__dirname + '/assets/js/jquery.tumblr-kit.min.js');
// });

app.get('/*.(js|css|png|jpg)', function(req, res){
  res.sendfile(__dirname + '/assets'+req.url);
});

// app.post('/tumblr', function(req, res){
// 	var obj = {};
// 	console.log('body: ' + JSON.stringify(req.body));
// 	res.sendfile(__dirname + '/tumblr.html');
// 	// res.send(req.body);
// });

Syslog.init("node-syslog-test", Syslog.LOG_PID | Syslog.LOG_ODELAY, Syslog.LOG_LOCAL0);
Syslog.log(Syslog.LOG_INFO, "news info log test");
Syslog.log(Syslog.LOG_ERR, "news log error test");
Syslog.log(Syslog.LOG_DEBUG, "Last log message as debug: " + new Date());
Syslog.close();

app.listen(80);
