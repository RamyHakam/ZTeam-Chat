
var socket= io();
socket.on('connect',()=>{

console.log("connected to server");
});
socket.on('disconnect',()=>{

console.log("connection closed");

});

socket.on('newMessage',function(message){
console.log("new message",message);


});

//socket.emit("createMessage",{to:'ramy',from:'test'});