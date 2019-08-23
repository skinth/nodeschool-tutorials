function attachTitle(first) {
    return 'DR. '+first
}

Promise.resolve('MANHATTAN')
        .then(attachTitle)
        .then(console.log)