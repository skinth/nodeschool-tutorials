var qio = require('q-io/http')

qio.read('http://localhost:1337')
    .then((val) => console.log(JSON.parse(val)))
    .catch((err) => console.log(err))