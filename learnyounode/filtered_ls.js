var fs = require('fs');
var path = require('path');

let dir = process.argv[2];
let ext = process.argv[3];

fs.readdir(dir, (err, list) => {
    if(err) return console.log(err);
    list.filter(it => path.extname(it) == '.'+ext)
        .forEach(it => console.log(it));
});