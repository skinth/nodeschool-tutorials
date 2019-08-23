var http = require('http'),
    async = require('async'),
    url = process.argv[2]

async.reduce(['one', 'two', 'three'], 0, (memo, item, next) => {
    http.get(url+'?number='+item, (res) => {
        var body = ''
        res.on('data', (chunk) => {
            body += chunk
        })
        res.on('end', () => {
            next(null, memo+Number(body))
        })
    })
    .on('error', (err) => console.log(err))
}, (err, res) => {
    if (err) console.log(err)
    console.log(res)
})