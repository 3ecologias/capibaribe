// var app = require('express').createServer();

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var express = require("express");
var app = express();
var Syslog = require("node-syslog");

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// Middleware
// http://stackoverflow.com/questions/15684130/express-js-error-handling
app.use(app.router); // you need this line so the .get etc. routes are run and if an error within, then the error is parsed to the ned middleware (your error reporter)
app.use(function(err, req, res, next) {
    if(!err) return next(); // you also need this line
    Syslog.init("node-syslog-test", Syslog.LOG_PID | Syslog.LOG_ODELAY, Syslog.LOG_LOCAL0);
	Syslog.log(Syslog.LOG_INFO, "news info log test");
	Syslog.log(Syslog.LOG_ERR, "news log error test: " + err );
	Syslog.log(Syslog.LOG_DEBUG, "Last log message as debug: " + new Date());
	Syslog.close();
    console.log("error!!!");
    res.send("error!!!");
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app.html');
});

app.get('/v2', function (req, res) {
  res.sendfile(__dirname + '/index3.html');
});

app.get('/v3', function (req, res) {
  res.sendfile(__dirname + '/app2.html');
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

app.get('/*.(js|css|png|jpg|woff)', function(req, res){
  res.sendfile(__dirname + '/assets'+req.url);
});

// app.post('/tumblr', function(req, res){
// 	var obj = {};
// 	console.log('body: ' + JSON.stringify(req.body));
// 	res.sendfile(__dirname + '/tumblr.html');
// 	// res.send(req.body);
// });


httpServer.listen(80);
httpsServer.listen(443);
// app.listen(80);
