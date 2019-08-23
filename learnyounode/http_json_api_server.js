var http = require('http')
var url = require('url')

var server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        var parsed = url.parse(req.url, true)
        var d = new Date(parsed.query.iso)
        var ret
        if(parsed.pathname == "/api/parsetime") {
            ret = JSON.stringify({
                "hour": d.getHours(),
                "minute": d.getMinutes(),
                "second": d.getSeconds()
            })
        } else if (parsed.pathname == "/api/unixtime") {
            ret = JSON.stringify({
                "unixtime": d.getTime()
            })
        } 
        
        if(ret) {
            res.writeHead(200, {'content-type': 'application/json'})
            res.write(ret)
        } else {
            res.writeHead(404)
        }
        res.end()
    }
})
.listen(Number(process.argv[2]))