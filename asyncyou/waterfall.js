var http = require('http'),
    fs = require('fs'),
    async = require('async')

async.waterfall([
    (next) => {
        fs.readFile(process.argv[2], (err, data) => {
            if (err) return next(err)
            next(null, data.toString())
        })
    },
    (url, next) => {
        http.get(url, null, (resp) => {
            var data = '';
            resp.on('data', (chunk) => {
                data += chunk
            })
            resp.on('end', () => {
                next(null, data)
            })
        }).on('error', (err) => next(err))
    }
], (err, res) => {
    if (err) return console.log(err)
    console.log(res)
})