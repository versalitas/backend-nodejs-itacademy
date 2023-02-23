
//require module
const amqp = require('amqplib/callback_api');

class Subscriber{
    constructor(name){
        this.name = name;
    }

    readMessage(queueName){

    //connecting to server
        amqp.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
            
                //declaring from which queue we will consume
                //making sure it exists in case consumer 
                //starts before producer
                let queue = queueName;

                channel.assertQueue(queue, {
                    durable: false
                });

                console.log(`${this.name} waiting for messages. To exit press CTRL+C`, queue);

                channel.consume(queue, function(msg) {
                    console.log(`${this.name} received, msg.content.toString()`);
                }, {
                    noAck: true
                });
            });
        });
        }
}

const subscriber1 = new Subscriber("Hannah");
subscriber1.readMessage(subscriber1.readMessage("Delivery Update"));





