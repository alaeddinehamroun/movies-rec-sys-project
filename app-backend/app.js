import Kafka from 'node-rdkafka'; // Node.js wrapper for Kafka C/C++ library



const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': '172.20.0.2:9092'
}, {}, { topic: 'ratings-topic' }
);


import express from 'express';
const app = express();
app.use(express.json()); // Parse JSON requests

/**
 * POST /ratings
 * Purpose: Add a rating
 */
app.post('/ratings', (req, res) => {

  console.log(req.body)
  const message = JSON.stringify(req.body);

  const success = stream.write(Buffer.from(message));

  if (success) {
    console.log("Message sent successfully to topic:", message);
  } else {
    console.log("Something went wrong.")
  }

  res.send(message)

});

/**
 * GET /recommendations/:userId
 * Purpose: Get recommendations for a user
 */
app.get('/recommendations/:userId', (req, res) => {


  
})


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});






// const express = require('express');
// const app = express();
// const Kafka = require('kafka-node');
// const config = require('./config');

// const kafkaHost = '172.20.0.2:9092';
// const kafkaTopic = 'kafka-example-topic';

// const Producer = Kafka.Producer;
// const client = new Kafka.KafkaClient({ kafkaHost: kafkaHost });
// const producer = new Producer(client, { requireAcks: 0, partitionerType: 2 });


// /**
//  * POST /ratings
//  * Purpose: Add a rating
//  */
// app.post('/ratings', (req, res) => {
//   try {
//     let payloadToKafkaTopic = [{ topic: kafkaTopic, messages: 'Hello' }];
//     console.log(payloadToKafkaTopic);
//     producer.send(payloadToKafkaTopic, (err, data) => {
//       if (err) {
//         console.log('Error sending message:', err);
//         res.status(500).json({ error: 'Error sending message to Kafka topic' });
//       } else {
//         console.log('Message sent to Kafka topic:', data);
//         res.json({ message: 'Message sent to Kafka topic' });
//       }
//     });

//     producer.on('error', function (err) {
//       console.log('Error in Kafka producer:', err);
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });





// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });












