function all(first, second) {
    return new Promise((resolve, reject) => { 
        var counter = 0
        var ar = []
        first.then((value) => {
            ar[0] = value
            counter++
            if (counter == 2) {
                resolve(ar)    
            }
        })
        second.then((value) => {
            ar[1] = value
            counter++
            if (counter == 2) {
                resolve(ar)    
            }
        })
    })
}

all(getPromise1(), getPromise2())
    .then(console.log)
    .catch((err) => console.log(err))