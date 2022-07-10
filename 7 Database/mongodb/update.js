const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oss:<password>@cluster0.uetfv6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("oss");
  const collection = db.collection("documents");

  const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  console.log("Updated documents =>", updateResult);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
