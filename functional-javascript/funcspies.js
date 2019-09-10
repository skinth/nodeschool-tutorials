/*
Task: Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
Create a spy that keeps track of how many times a function is called.
*/

function Spy(target, method) {
    var func = target[method]

    var res = {
        count: 0
    }

    target[method] = function() {
        res.count++
        return func.apply(this, arguments)
    }

    return res
}

module.exports = Spy

