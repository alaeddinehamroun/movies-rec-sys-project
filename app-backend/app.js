import express from 'express';
const app = express();

import Kafka from 'node-rdkafka'; // Node.js wrapper for Kafka C/C++ library
import hbase from 'hbase';



// const stream = Kafka.Producer.createWriteStream({
//   'metadata.broker.list': '172.20.0.2:9092'
// }, {}, { topic: 'ratings-topic' }
// );



app.use(express.json()); // Parse JSON requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/**
 * POST /ratings
 * Purpose: Add a rating
 */
app.post('/ratings', (req, res) => {

  //console.log(req.body)
  const message = JSON.stringify(req.body);

  // const success = stream.write(Buffer.from(message));

  // if (success) {
  //   console.log("Message sent successfully to topic:", message);
  // } else {
  //   console.log("Something went wrong.")
  // }

  res.send(req.body)

});






const client = hbase({ host: '172.22.0.5', port: 8080 })



/**
 * GET: /ratings:uesrId
 * Purpose: Get ratings by user
 */
app.get('/ratings/:userId', (req, res) => {



  const userId = req.params.userId

  // const myScanner = new hbase.Scanner(client, {table: 'ratings'})
  const table = client.table('ratings');
  table.scan({
    filter: {
      "op": "MUST_PASS_ALL", "type": "FilterList", "filters": [{
        "op": "EQUAL",
        "type": "RowFilter",
        "comparator": { "value": `^${userId}$`, "type": "RegexStringComparator" }
      }
      ]
    }
  }, (error, cells) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    }
    res.send(cells)
  });
  // client.table("ratings").row('1').get( (error, value) => {
  //   console.info(value)

  // })

  // ratings = [
  //   { user_id: 123, movie_id: 1, rating: 4.5 },
  //   { user_id: 123, movie_id: 1, rating: 4.5 },
  //   { user_id: 123, movie_id: 1, rating: 4.5 },
  //   { user_id: 223, movie_id: 1, rating: 4.5 },
  //   { user_id: 223, movie_id: 1, rating: 4.5 },
  //   { user_id: 223, movie_id: 1, rating: 4.5 },
  // ]

  // send ratings where user_id == userId

})

/**
 * GET /recommendations/:userId
 * Purpose: Get recommendations for a user
 */
app.get('/recommendations/:userId', (req, res) => {



})



/**
 * GET /movies/:movieId
 * Purpose: Get movie by id
 */
// TODO: NOT TESTED
// app.get('/movies/:movieId', (req, res) => {

//   const movieId = req.params.movieId


//   const table = client.table('movies');
//   table.scan({
//     filter: {
//       "op": "MUST_PASS_ALL", "type": "FilterList", "filters": [{
//         "op": "EQUAL",
//         "type": "RowFilter",
//         "comparator": { "value": `^${movieId}$`, "type": "RegexStringComparator" }
//       }
//       ]
//     }
//   }, (error, rows) => {
//     if (error) {
//       res.status(500).send('Internal Server Error');
//     }
//     res.send(rows)
//   });
// })

/**
 * GET /movies
 * Purpose: Get all movies
 */
app.get('/movies', (req, res) => {


  const table = client.table('movies');
  table.scan({

  }, (error, rows) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    }
    res.send(rows)
  });
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












