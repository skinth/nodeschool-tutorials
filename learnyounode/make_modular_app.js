const es6 = require('./make_modular');

es6(process.argv[2], process.argv[3], (err, data) => {
    if(err) console.error(err);
    data.forEach(it => console.log(it));
});