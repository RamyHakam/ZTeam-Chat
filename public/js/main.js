
var socket= io();
socket.on('connect',()=>{

console.log("connected to server");
});
socket.on('disconnect',()=>{

console.log("connection closed");

});

socket.on('newMessage',function(message){
console.log("new message",message);
var dt=new Date($.now());
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

var data =` <li class="right clearfix"><span class="chat-img pull-right">
                            <img src="../img/avatar5.png"  style=" width:50px;" alt="User Avatar" class="img-circle" />
                        </span>
                            <div class="chat-body clearfix">
                                <div class="header">
                                    <small class=" text-muted"><span class="glyphicon glyphicon-time"> ${time}</span></small>
                                    <strong class="pull-right primary-font">${message.from}</strong>
                                </div>
                                <p>
                                  ${message.text}.
                                </p>
                            </div>
                        </li>
                        `;







var li= jQuery(data);
//li.text(`${message.from}:${message.text}`);
jQuery("#messages").append(li);

});

 jQuery('#message-form').on('submit',function(e){
e.preventDefault();
socket.emit('createMessage',{
from:'user',
text:jQuery('#message').val()
});
 });




//socket.emit("createMessage",{to:'ramy',from:'test'});