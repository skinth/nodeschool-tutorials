var tape = require('tape'),
    func = require(process.argv[2]),
    n = 3

tape('test callback n times', (assert) => {
    assert.plan(n)
    func(n, () => {
        assert.pass('callback ended')
    })
})