var http = require('http'),
    async = require('async'),
    url = process.argv[2]

var count = 0,
    s = ''

async.whilst(
    () => {
        return s != 'meerkat'
    },
    (next) => {
        console.log(url)
        http.get(url, (res) => {
            console.log('res: ', res)
            count++
            var body = ''
            res.on('data', (chunk) => {
                body += chunk.toString()
            })
            res.on('end', () => {
                s = body.trim()
                next()
            })
        }).on('error', (err) => console.log(err))
    },
    (err) => {
        if(err) console.log(err)
        console.log(count)
    }
)