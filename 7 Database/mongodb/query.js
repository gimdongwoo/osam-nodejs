const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oss:<password>@cluster0.uetfv6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("oss");
  const collection = db.collection("documents");

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log("Found documents filtered by { a: 3 } =>", filteredDocs);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
