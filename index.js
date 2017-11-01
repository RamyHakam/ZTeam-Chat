//get the server and export it 
var app = require("./server/server.js");
app.run=function(port=3000){
    return app.listen(port,()=>{
        console.log(`Zteam-Chating is live on port ${port}`);
    })
}
//export the chating app
module.exports = app;