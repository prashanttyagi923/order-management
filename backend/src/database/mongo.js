const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');
const feedData = require('./feedData.json')

let database = null;
const dbName = 'orderManagement';

const startDatabase = async () => {
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString(dbName);
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
  database = connection.db();
feedDB();
}
async function feedDB() {
  await database.collection("users").insert(feedData.users);
  await database.collection("items").insert(feedData.items);
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};