/*
Task: Implement Array#reduce using recursion.
To test your reduction works correctly we will use your reduce implementation 
to execute our solution to the previous basic_reduce problem. i.e. your reduce 
function will be passed an array of words, and a function, and an initial value 
which will return an object containing the counts for each word found in the array. 
You don't need to implement this functionality, it will be supplied to your reduce implementation.
For simplicity, your implementation of reduce need not replicate the behaviour of a 
reduce missing an initial value. You may assume the initial value will always be supplied.
*/

function reduce(arr, fn, initial) {
    return (function subReduce(index, value) {
        if(index > arr.length -1) return value
        return subReduce(index + 1, fn(value, arr[index], index, arr))
    })(0, initial)
}

module.exports = reduce
