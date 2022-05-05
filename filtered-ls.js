const fs = require("fs");
fs.readdir(process.argv[2],function (err, data) {
  data.filter((el) => el.includes("."+process.argv[3]) && console.log(el));
});
