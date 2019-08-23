var bl = require('bl');
var http = require('http');

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);
        console.log(data.toString().split('').length);
        console.log(data.toString());
    }));
}).on("error", console.error);
