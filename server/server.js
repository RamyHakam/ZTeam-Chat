const path =require('path');
const express =require('express');
const socketio=require('socket.io');
const http=require('http');
const masterpath= path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const {generateMessage} =require ('./utils/message');

//creating app 
var app= express();
//creating app with http 

var server= http.createServer(app);
//adding socketio
var io= socketio(server);
app.use(express.static(masterpath));

io.on('connection',(socket)=>{
console.log("new user connection");
socket.on('disconnect',()=>{
console.log("disconnected");
});


socket.emit('newMessage',generateMessage('admin','welcome to chating')
);
//socket.emit("newMessage",{from:'ramy',message:"test message"});
socket.on('createMessage',function(Nmessage){





console.log("client message", Nmessage);
//send for all 



//broadcast for all expect this user 
socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'));

//send for this user only 








io.emit('newMessage',generateMessage(Nmessage.from,Nmessage.text) );


});



});


server.listen(port,()=>{
console.log(`server running on port ${port}`);
})

