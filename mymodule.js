const fs = require("fs");
module.exports = function (name, ext, callback) {
  fs.readdir(name, function (err, data) {
    if (err) {
      callback(err, null);
    }
    let result = data.filter(el=>el.includes("."+ext))
    callback(null,result)
  });
};
