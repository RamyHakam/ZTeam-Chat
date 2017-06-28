
var socket= io();
socket.on('connect',()=>{


var params= jQuery.deparam(window.location.search);
socket.emit('join',params,function(error){
if(error){
window.location.href='/';

}else{

console.log("ok");
}


});




console.log("connected to server");
});
socket.on('disconnect',()=>{



console.log("connection closed");

});

socket.on('updateUsers',function(users){


console.log(users);


});

socket.on('newMessage',function(message){
console.log("new message",message);


//scroll to bottom

function scrollToBottom(){


var it= jQuery('#testit');
var message= jQuery('#messages');

var newMessage= message.children('li:last-child')
var clientH= it.prop('clientHeight');
var scrollTop=it.prop('scrollTop');
var scrollH=it.prop('scrollHeight');
var newMessageH= newMessage.innerHeight();
var prevmessageH=newMessage.prev().innerHeight();
var t=clientH+scrollTop+newMessageH+prevmessageH;
if(clientH+scrollTop+newMessageH+prevmessageH>=scrollH){
it.scrollTop(scrollH);
}
}

var dt=new Date($.now());
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


var formatesTime=moment(message.createdAt).format('hh:mm a');
var template= jQuery('#message-template').html();
var html= Mustache.render(template,{

text:message.text,
from:message.from,
createdAt:formatesTime


});
jQuery("#messages").append(html);
scrollToBottom();



// var data =` <li class="right clearfix"><span class="chat-img pull-right">
//                             <img src="../img/avatar5.png"  style=" width:50px;" alt="User Avatar" class="img-circle" />
//                   // </span>
//                             <div class="chat-body clearfix">
//                                 <div class="header">
//                                     <small class=" text-muted"><span class="glyphicon glyphicon-time"> ${time}</span></small>
//                                     <strong class="pull-right primary-font">${message.from}</strong>
//                                 </div>
//                                 <p>
//                                   ${message.text}.
//                                 </p>
//                             </div>
//                         </li>
//                         `;

// var li= jQuery(data);
//li.text(`${message.from}:${message.text}`);
//jQuery("#messages").append(li);

 var aSound = document.createElement('audio');
     aSound.setAttribute('src', '../img/sounds/sound.mp3');
     aSound.play();

});

 jQuery('#message-form').on('submit',function(e){
e.preventDefault();
socket.emit('createMessage',{
text:jQuery('#message').val()
});
text:jQuery('#message').val("");


 });




//socket.emit("createMessage",{to:'ramy',from:'test'});