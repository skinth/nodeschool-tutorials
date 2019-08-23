first()
    .then((secret) => {return second(secret)})
    .then(console.log)
    .catch((err) => console.log(err))