var p = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE')
})

p.then(console.log, null)

console.log('MAIN PROGRAM')