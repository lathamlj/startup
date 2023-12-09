const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
//await client.connect
const db = client.db('keen');
//db.createCollection('observation')
//console.log('before connect statement')
const userCollection = db.collection('user'); //havent created userCollection yet
const observationCollection = db.collection('observation');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  console.log('connect line')
  //const db = client.db('keen')
  //await db.createCollection('observation')
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

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

module.exports = { getUser, getUserByToken, createUser, saveObservation, getObservations };
