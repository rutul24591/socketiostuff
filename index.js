var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var io = require("socket.io")(http);

//var username;
//var typing= false;
//var connected= false;
//var $usernameInput = $('.usernameInput'); // input for user's Username
//var $currentInput = $usernameInput.focus();
 
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.emit('connected');
	socket.on('chat message', function(msg){
        io.emit('chat message', msg);
	}); 
});

	function updateTyping () {
	    if (connected) {
    	  if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();
	}
} 

http.listen(3000,function(){
	console.log(" Http server listening on port 3000");
});

