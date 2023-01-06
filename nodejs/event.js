const EventEmitter = require('events');
const {getDate} =require('./util');

const logEvent = new EventEmitter();


logEvent.on('showLog',()=>{
    console.log('show log event occured');
});
logEvent.on('showName',(...name)=>{
    console.log('my name '+ name );
});
logEvent.on('logPage',pathname=>{
    console.log(`log: ${getDate()} :  ${pathname}` );
});

// logEvent.emit('showLog')
// logEvent.emit('showName','diensh','gopal','chand');

module.exports={
    logEvent
};