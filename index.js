//get the server and export it 
var app = require("./server/server.js");
module.exports = app.listen("3000",()=>{
    console.log("Zteam chat is live on port 3000");
});