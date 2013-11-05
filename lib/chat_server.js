function createChat(server){
	var io = require('socket.io').listen(server);

	io.sockets.on("connection", function(socket){
		io.sockets.emit('message', { text: "Hello, welcome to our chat!" })
		socket.on("message", function(text){
	    io.sockets.emit('message', { text: text.text });
		});
	});
}

module.exports.createChat = createChat;
