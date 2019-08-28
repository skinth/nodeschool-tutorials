/*Task: Write run function that gets a generator as an argument, starts it and
yields promise value foo. Use run from callback exercise as a example.*/
function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    var it = generator(go)

    function go(err, result) {
        if(err) return it.throw(new Error(err))
        it.next(result).value
            .then(res => it.next(res))
            .catch(err => it.throw/new Error(err))
    }

    go()
}

run(function* () {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch(e) {
        console.log(e)
    }
});
