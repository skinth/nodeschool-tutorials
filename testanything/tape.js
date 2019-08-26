var fancify = require(''+process.argv[2])
var tape = require('tape')

tape('test suite fancify', (assert) => {
    assert.equal(fancify('legrandin'), '~*~legrandin~*~', 'Incorrect Default fancify')
    assert.equal(fancify('legrandin', true), '~*~LEGRANDIN~*~', 'Incorrect ALLCAPS fancify')
    assert.equal(fancify('legrandin', false, ']'), '~]~legrandin~]~', 'Incorrect custom character fancify')
    assert.end()
})