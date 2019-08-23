var p = Promise.resolve('I\'m fired!')
p.then(console.log)

var p = new Promise((resolve, reject) => {
    reject(new Error('Sorry...'))
})
p.catch((err) => console.log(err.message))

var po = Promise.reject(new Error('Brrrr'))
po.then(console.log)
    .catch((err) => console.log(err.message))