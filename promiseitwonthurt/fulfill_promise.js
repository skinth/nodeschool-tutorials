'use strict'

var p = new Promise((fulfill, reject) => {
    setTimeout(() => fulfill('FULFILLED!'), 300)
})
p.then((msg) => console.log(msg))