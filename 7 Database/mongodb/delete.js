const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oss:study123@cluster0.uetfv6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db("oss");
  const collection = db.collection("documents");

  const deleteResult = await collection.deleteMany({ a: 3 });
  console.log("Deleted documents =>", deleteResult);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
