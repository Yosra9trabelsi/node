const fs = require("fs");
const content = fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    return console.log(err);
  }

  const lines = data.toString().split(`\n`).length - 1;
  console.log(lines);
});
