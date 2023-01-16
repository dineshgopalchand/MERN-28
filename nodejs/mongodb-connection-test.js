const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'ecommerce';
let collection;

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  collection = db.collection('products');

  // the following code examples can be pasted here...
  const data = await collection.find({
    title: 'iPhone 9'
  }).toArray();
  console.log(data);
  return 'done.';
}

main()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());

setTimeout(async () => {
  const data = await collection.findOne({
    title: 'iPhone 9'
  });
  console.log({ data });
});