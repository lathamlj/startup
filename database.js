const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('keen');
const observationCollection = db.collection('observation');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function saveObservation(observation) {
  const result = await observationCollection.insertOne(observation);
  return result;
}

function getObservations() {
  const query = {};
  const options = {
    sort: { observation: -1 },
    limit: 10,
  };
  const cursor = observationCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { saveObservation, getObservations };
