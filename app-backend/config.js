require('dotenv').config();

const config = {
  KafkaHost:'172.20.0.2:9092',
  KafkaTopic: 'ratings-topic'
};

module.exports = config;