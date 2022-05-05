const file = require("./mymodule");
file(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    console.log(err);
  }
  data.map((el) => console.log(el));
});
