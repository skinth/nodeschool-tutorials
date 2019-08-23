var p = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('REJECTED!')), 300)
})

p.then(null, onReject)

function onReject(error) {
    console.log(error.message)
}