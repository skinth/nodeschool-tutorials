/*
Task: Use Array#reduce to implement a simple version of Array#map.
*/

module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce((mapArr, el, ix, arr) => {
        mapArr.push(fn.call(thisArg, el, ix, arr))
        return mapArr
    }, [])
}