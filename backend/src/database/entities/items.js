const {getDatabase} = require('../mongo');

const collectionName = 'items';

async function insertItem(item) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(item);
  return insertedId;
}

async function getItem() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
    insertItem,
    getItem,
};