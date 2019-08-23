var async = require('async'),
    http = require('http')

var url_one = process.argv[2]
var url_two = process.argv[3]

async.series({
    requestOne: (next) => {
        var data = ''
        http.get(url_one, (resp) => {
            resp.on('data', (chunk) => data += chunk)
            resp.on('end', () => next(null, data))
        }).on('error', (err) => next(err))
    },
    requestTwo: (next) => {
        var data = ''
        http.get(url_two, (resp) => {
            resp.on('data', (chunk) => data += chunk)
            resp.on('end', () => next(null, data))
        }).on('error', (err) => next(err))
    }
}, (err, res) => {
    if (err) return console.log(err)
    console.log(res)
})