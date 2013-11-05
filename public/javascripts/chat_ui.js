var getMessage = function(){
	var message = $(".message").val();
	return message;
}

var sendMessage = function (chat){
	message = getMessage();
	chat.sendMessage(message);
}

var that = this;

$('document').ready(function() {
	var socket = io.connect();
	var chat = new that.ChatLib.Chat(socket);

	chat.socket.on("message", function(text){
		$(".message-area").append(text.text + "<br>");
	});

	$(".send-message").click(function (event){
		sendMessage(chat);
	});
});