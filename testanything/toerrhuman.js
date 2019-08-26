var feedCat = require(''+process.argv[2]),
    tape = require('tape')


tape('do not feed chocolate to the cat', (assert) => {
    assert.throws(() => {
        feedCat('chocolate')
    })
    assert.equal(feedCat('fish'), 'yum', 'fish has to be good for cats')
    assert.end()
})