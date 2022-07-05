const fs = require("fs/promises");

const content = "Hellow World";

async function helloWrold() {
  try {
    await fs.writeFile(process.env.FILE_PATH, content);

    const data = await fs.readFile(process.env.FILE_PATH, { encoding: "utf8" });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

helloWrold();
