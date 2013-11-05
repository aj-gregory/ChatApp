(function(root){
	var ChatLib = root.ChatLib = (root.ChatLib || {});

	var Chat = ChatLib.Chat = function(socket){
		this.socket = socket;
	};

	Chat.prototype.sendMessage = function(text){
		this.socket.emit("message", { text: text });
	}

})(this);