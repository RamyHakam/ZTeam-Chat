const path =require('path');
const express =require('express');
const socketio=require('socket.io');
const http=require('http');
const masterpath= path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
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
//socket.emit("newMessage",{from:'ramy',message:"test message"});
socket.on('createMessage',function(Nmessage){

console.log("client message", Nmessage);
//send for all 



//broadcast for all expect this user 
socket.broadcast.emit('newMessage',{
from:"admin",
text:"new user joined chat",
createdAt: new Date().getTime()
});

//send for this user only 

socket.emit('newMessage',{
from:'admin',
text:"welcom to chating",
createdAt:new Date().getTime()
});






io.emit('newMessage',{
from:Nmessage.from,
to:Nmessage.text,
createdAt: new Date().getTime()
});




});



});


server.listen(port,()=>{
console.log(`server running on port ${port}`);
})

