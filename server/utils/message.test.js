var expect= require('expect');

var {generateMessage}= require('./message');

describe("generateMessage",()=>{
it("shoud retrun message",()=>{

 var from="ramy";
var text="test message";

var message= generateMessage(from,text);

expect(message.createdAt).toBeA('number');
expect(message).toInclude({from,text});
//testing callback 

});


});