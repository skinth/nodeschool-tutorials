function parsePromised(json) {
    try {
        return Promise.resolve(JSON.parse(json))
    } catch (e) {
        return Promise.reject(e)
    }
}

parsePromised(process.argv[2])
    .then(console.log)
    .catch((err) => console.log(err.message))