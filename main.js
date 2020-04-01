// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");
//
// var fs2 = require("fs");
// fs2.readFile('input.txt', function (err, data) {
// 	if(err) return console.log(err);
// 	console.log(data.toString());
// });
// console.log("程序执行结束222")
//
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
//
// var connectHandler = function connected() {
// 	console.log('连接成功');
// 	eventEmitter.emit('data_received');
// }
//
// eventEmitter.on('data_received', function () {
// 	console.log('数据接收成功')
// });
//
// eventEmitter.on('connection', connectHandler);
//
//
//
// eventEmitter.emit('connection');
// console.log('程序执行完毕')

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
	console.log("监听器listener1执行。")
}

var listener2 = function () {
	console.log("监听器listener2执行。")
}

eventEmitter.addListener('readMe', listener1);

eventEmitter.addListener('readMe', listener2);

var eventListeners = eventEmitter.listenerCount('readMe');
console.log(eventListeners+"个监听器监听readMe事件");

eventEmitter.emit("readMe");













