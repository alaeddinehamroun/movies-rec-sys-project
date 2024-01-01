![Blank diagram](https://github.com/alaeddinehamroun/movies-rec-sys-project/assets/71340201/3a6e9719-420e-4120-be52-38c778b8c534)
We are going to work with 3 containers: one master and two workers (to follow TP instructions) as well as a container for HBase.
### 1. Create hadoop eco system docker image:
```bash
docker build -t alaeddine/hadoop-eco-system:3 .
```
### 2. Create a network:
```bash
docker network create --driver=bridge hadoop
```

### 3. Create and launch the containers:
```bash
docker run -itd --net=hadoop -p 9870:9870 -p 8088:8088 -p 7077:7077 -p 9092:9092 -p 2181:2181 -p 9000:9000 -p 9090:9090 -p 8081:8081 --name hadoop-master --hostname hadoop-master alaeddine/hadoop-eco-system:3

docker run -itd -p 8040:8042 --net=hadoop --name hadoop-slave1 --hostname hadoop-slave1 alaeddine/hadoop-eco-system:3

docker run -itd -p 8041:8042 --net=hadoop --name hadoop-slave2 --hostname hadoop-slave2 alaeddine/hadoop-eco-system:3

docker run -itd --net=hadoop -p 16010:16010 -p 16000:16000 -p 8080:8080 --name hbase-node --hostname hbase-node alaeddine/hadoop-eco-system:3
```

### Make sure that everything is working


### Access hbase-node and import movies and ratings ddataset


```bash
hbase org.apache.hadoop.hbase.mapreduce.ImportTsv -Dimporttsv.separator=',' -Dimporttsv.columns='HBASE_ROW_KEY,rating:movieId,rating:rating,rating:timestamp' 'ratings' ratings.csv
hbase org.apache.hadoop.hbase.mapreduce.ImportTsv -Dimporttsv.separator=',' -Dimporttsv.columns='HBASE_ROW_KEY,movie:title,movie:genre' 'movies' movies.csv
```

### Create a kafka topic on hadoop-master and launch a consumer

```bash
kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic ratings-topic

kafka-topics.sh --list --bootstrap-server localhost:9092

kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic ratings-topic --from-beginning
```

### Train ALS

### Start Backend
```bash
npm start
```
### Start Frontend
```bash
cd app-ui/
ng server
```

Now every added/modified user rating to a movie is saved on HBase. For every k mins, the ALS model is retrained to generate recommendations for the user and they are saved on HBase after of course deleting the previous recommends.
