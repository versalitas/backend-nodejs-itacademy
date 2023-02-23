
//https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel//
//community seem divided between fork or npm-run-all
/* // fork-minimal.js - run with: node fork-minimal.js

const childProcess = require('child_process');

let scripts = ['some-script.js', 'some-other-script.js'];
scripts.forEach(script => childProcess.fork(script));
*/



//requiring
const Publisher = require('./publisher.js');
const Subscriber = require('./subscribe.js');


//instantiating Publisher and calling method
const publisher1 = new Publisher('DeliveryService');
publisher1.sendMessage('Delivery Updates', 'Your package has been shipped off.');

//instantiating Subscriber and calling method
const subscriber1 = new Subscriber("Hannah");
subscriber1.readMessage(subscriber1.readMessage("Delivery Update"));





