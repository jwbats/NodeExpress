var express = require('express');
var app = express();

var getRouter = require('./get/get.js');

app.use(getRouter);

var server = app.listen(1337, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Host: ' + host);
	console.log('Port: ' + port);
});