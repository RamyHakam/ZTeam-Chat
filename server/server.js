const path =require('path');
const express =require('express');
const masterpath= path.join(__dirname,'../public');

//creating app 


var app= express();
app.use(express.static(masterpath));
app.listen(3000,()=>{
console.log("server is running ");
})

console.log(masterpath);
