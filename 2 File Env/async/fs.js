const fs = require("fs/promises");

const content = "Hellow World";

async function helloWrold() {
  try {
    await fs.writeFile("./hello.txt", content);

    const data = await fs.readFile("./hello.txt", { encoding: "utf8" });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

helloWrold();
