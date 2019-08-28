/*
Task: Write a function duckCount that returns the number of arguments passed to it 
which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.
*/

function duckCount() {
    return Array.prototype.slice.call(arguments)
            .filter((arg) => Object.prototype.hasOwnProperty.call(arg, 'quack')).length
}

module.exports = duckCount