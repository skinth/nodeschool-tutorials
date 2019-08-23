var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, list) => {
        if(err) return callback(err, null);
        callback(null, list.filter(it => path.extname(it) == '.'+ext));
    });
};