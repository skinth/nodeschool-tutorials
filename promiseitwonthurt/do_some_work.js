var qhttp = require('q-io/http')

qhttp.read('http://localhost:7000/')
    .then((id) => {
        return qhttp.read('http://localhost:7001/'+id.toString())
    })
    .then((json) => console.log(JSON.parse(json)))
    .catch((err) => console.log(err))
    .done()