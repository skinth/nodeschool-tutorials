var fs = require('fs');

var tot = 0;
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err) return console.error(err);
    tot = data.split('\n').length-1;
    console.log(tot);
});