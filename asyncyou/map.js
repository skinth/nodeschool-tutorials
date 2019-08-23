var http = require('http'),
    async = require('async')

async.map([process.argv[2], process.argv[3]], (url, next) => {
    http.get(url, (res) => {
        var body = ''
        res.on('data', (chunk) => {
            body += chunk.toString()
        })
        res.on('end', () => {
            next(null, body)
        })
    })
    .on('error', (err) => next(err))
}, (err, res) => {
    if (err) return console.log(err)
    console.log(res)
})