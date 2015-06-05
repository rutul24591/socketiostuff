var app = require('express')();
var http = require('http').Server(app);
var expres = require('express');

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000,function(){
	console.log(" Http server listening on port 3000");
});

