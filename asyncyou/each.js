var http = require('http'),
    async = require('async')

var one_url = process.argv[2]
var two_url = process.argv[3]

async.each([one_url, two_url], (url, next) => {
    http.get(url, (res) => {
        res.on('data', (chunk) => {
        })
        res.on('end', (chunk) => {
            next(null)
        })
    })
    .on('error', (err) => next(err))
}, (err) => {
    if (err) console.error(err)
})