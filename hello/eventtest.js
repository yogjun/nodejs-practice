var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

console.log("程序执行完毕。");










var connectHandler = function connected() {
    console.log('连接成功。');
    eventEmitter.emit('data_received');
 }