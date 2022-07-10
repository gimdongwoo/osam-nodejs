const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oss:<password>@cluster0.uetfv6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
