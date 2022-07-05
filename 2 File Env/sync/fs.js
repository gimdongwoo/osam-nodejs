const fs = require("fs");

const content = "Hellow World";

try {
  fs.writeFileSync("./hello.txt", content);
} catch (err) {
  console.error(err);
}

try {
  const data = fs.readFileSync("./hello.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
