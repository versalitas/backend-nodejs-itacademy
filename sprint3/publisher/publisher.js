//https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
//https://www.npmjs.com/package/amqp#installation


//require module
let amqp = require('amqplib/callback_api');


class Publisher{

    constructor(name){
        this.name = name;
    }
    
    sendMessage(queueName, message){

    
    //copy paste walk through from rabbitmq tutorial....
    //connect to server if you were able to install it...
    amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    //creating channel where most of the api for actions resides
    connection.createChannel(function(error1, channel) {
        if (error1) {
        throw error1;
        }

        //declaring a queue
        //it will only be created if inexistant
    let queue = queueName;
    //message
    let msg = message;

        channel.assertQueue(queue, {
        durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(`${this.name} sent ${msg}`);
    });
    });

    //closing the queue
    setTimeout(function() {
        connection.close();
        process.exit(0)
        }, 500);
    }
}


const publisher1 = new Publisher('DeliveryService');
publisher1.sendMessage('Delivery Updates', 'Your package has been shipped off.');
