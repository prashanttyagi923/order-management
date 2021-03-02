const {getDatabase} = require('../mongo');

const collectionName = 'users';

 addUser = async (user) => {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(item);
  return insertedId;
}

getUser = async () => {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
    addUser,
    getUser,
};