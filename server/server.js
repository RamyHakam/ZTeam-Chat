const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const masterpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const { generateMessage } = require('./utils/message');
const { Users } = require('./utils/users');
//creating app 
var app = express();
//creating app with http 

var server = http.createServer(app);
//adding socketio
var io = socketio(server);
var users = new Users();
app.use(express.static(masterpath));

io.on('connection', (socket) => {
    console.log("new user connection");
    socket.on('disconnect', () => {

        console.log("disconnected");
        var user = users.removeUser(socket.id);
        if (user) {
            console.log('user', user.room);
            io.to(user.room).emit('updateUsers', users.getList(user.room));
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has beed leave the chat`));
        }

    });



    socket.on('join', (params, callback) => {

        if ((params.Name == undefined || params.Name == "") || params.Room == undefined || params.Room == "") {

            callback('data is empty');

        } else {

            socket.join(params.Room);
            users.removeUser(socket.id);
            users.addUser(socket.id, params.Name, params.Room);
            console.log(users);

            io.to(params.Room).emit('updateUsers', users.getList(params.Room))

            //send welcome to user 
            //socket.to(params.Room).emit('newMessage',generateMessage('Admin',`Welcom to chat ${params.Name}`));
            //send user has joinedto others 

            socket.emit('newMessage', generateMessage('Admin', 'Welcome to ZTeam Chat App'));

            socket.broadcast.to(params.Room).emit('newMessage', generateMessage('Admin', ` ${params.Name} has been joined`));

            callback();



        }



    });

    socket.on('createMessage', function(Nmessage) {

        //get user info 


        var user = users.getUser(socket.id);

        io.to(user.room).emit('newMessage', generateMessage(user.name, Nmessage.text));
        console.log("client message", Nmessage);
        //send for all 


        //broadcast for all expect this user 
        //socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'));

        //send for this user only 

    });



});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})
module.exports = server;