const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb+srv://cluster0.xxpkmdg.mongodb.net/';
const client = new MongoClient(url);
const dbName = 'myFirstDatabase';
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  main();