const fs = require("fs");

const content = "Hellow World";

fs.writeFile("./hello.txt", content, (err) => {
  if (err) {
    console.error(err);
  }

  fs.readFile("./hello.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
});
