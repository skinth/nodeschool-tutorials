function *factorial(n) {
    var i = 1
    var fact = 1
    while (i <= n) {
        fact = fact * i
        i++
        yield fact
    }
}

for (var n of factorial(5)) {
    console.log(n)
}