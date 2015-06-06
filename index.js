var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var io = require("socket.io")(http);


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log(" A user is connected for chat");
	socket.on('disconnect', function(){
		console.log("A user has disconnected from chat");
	}); 
});

http.listen(3000,function(){
	console.log(" Http server listening on port 3000");
});

