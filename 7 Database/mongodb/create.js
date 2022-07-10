const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oss:<password>@cluster0.uetfv6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("oss");
  const collection = db.collection("documents");

  const insertResult = await collection.insertMany([
    { a: 1 },
    { a: 2 },
    { a: 3 },
  ]);

  return insertResult;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
