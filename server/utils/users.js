class Users{

constructor(name,age){

this.users=[];

}
//add user to list 

addUser( id,name,room){

var user ={id,name,room};
this.users.push(user);
return user;

}
//remove user 

removeUser(id){
   var user=this.getUser(id);

var users = this.users.filter((user)=>user.id!==id);
    this.users=users;
return user;
}

getList(room){

    var list = this.users.filter((user)=> user.room=room);
    var names= list.map(user=>user.name);
    return names;

}

getUser(id){
  //  console.log(id);
    console.log(this.users.filter((user)=>user.id===id)[0]);
return  this.users.filter((user)=>user.id===id)[0];

}


}
module.exports={Users};
