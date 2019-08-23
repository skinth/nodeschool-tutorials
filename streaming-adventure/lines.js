var through = require('through2')

var n_line = 1
var stream = through(function transform(buf, _, next) {
    this.push(n_line % 2 == 0 ? buf.toString().toUpperCase() : buf.toString().toLowerCase())
    n_line++
    next()
})
process.stdin.pipe(stream).pipe(process.stdout)