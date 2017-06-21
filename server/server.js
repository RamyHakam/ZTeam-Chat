const path =require('path');
const express =require('express');
const masterpath= path.join(__dirname,'../public');
const port = process.port ||3000;
//creating app 


var app= express();
app.use(express.static(masterpath));
app.listen(port,()=>{
console.log(`server running on port`);
})

