const fs = require("fs");

if (fs.existsSync("./hello.txt")) {
  fs.unlinkSync("./hello.txt");
}

const content = "Hellow World";

fs.writeFile("./hello.txt", content, (err) => {
  if (err) throw err;

  try {
    const data = fs.readFileSync("./hello.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});
