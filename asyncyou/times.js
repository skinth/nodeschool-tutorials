var http = require('http'),
    async = require('async'),
    hostname = process.argv[2],
    port = process.argv[3],
    url = "http://"+hostname+":"+port

function createUser(id, callback) {
    var req = http.request({
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST'
    }, (res) => {
        res.on('data', (chunk) => {})
        res.on('end', () => callback(null))
    })
    .on('error', (err) => console.log(err))
    req.write(JSON.stringify({user_id: id}))
    req.end()
}

async.series([
    //create 5 users with POST request
    (next) => {
        async.times(5, (ix, nextUser) => {
            createUser(ix + 1, (err, data) => {
                nextUser(err, data)
            })
        }, (err, users) => {
            next(err, null)
        })
    },
    //GET users
    (next) => {
        http.get(url+"/users", (res) => {
            var body = ''
            res.on('data', (chunk) => {
                body += chunk.toString()
            })
            res.on('end', () => {
                next(null, body)
            })
        })
        .on('error', (err) => next(err))
    }
],
    (err, data) => {
        if (err) console.log(err)
        console.log(data[1])
    }
)