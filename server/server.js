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
});

server.listen(port,()=>{
console.log(`server running on port ${port}`);
})

