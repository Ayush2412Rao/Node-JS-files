const EventEmitter = require("events");
const event = new EventEmitter();
event.on("check",(sc,msg)=>{
    console.log(`The status code is ${sc} and the page is ${msg}`);
});
event.emit("check",200,"ok");