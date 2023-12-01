const logEvents = require("./logEvents");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
//initialize object
const myEmitter = new MyEmitter();
//add listner to log events
myEmitter.on("log", (mssge) => logEvents(mssge));
setTimeout(() => {
  myEmitter.emit("log", "log event emitted");
}, 2000);
