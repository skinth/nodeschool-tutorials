/*Task: Add error handling to this boilerplate. Teach run to throw an exception and
catch that in generator. firstFile should be null if it doesn't exist.*/
var fs = require('fs');

function run(generator) {
    var it = generator(go);
    
    function go (err, result) {
        if (err) return it.throw(new Error(err)) 
        it.next(result);
    }
    
    go();
}

run(function* (done) {
    var firstFile = null;
    try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    } catch(e) {
        //console.log('ex:',e)
    }

    console.log(firstFile);
});
