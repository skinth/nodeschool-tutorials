var cool = require(process.argv[2])
var assert = require('assert')

assert.equal(cool(42), true, '42 has to be cool!')
