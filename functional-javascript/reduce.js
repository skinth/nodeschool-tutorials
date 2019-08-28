/*
Task: iven an Array of strings, use Array#reduce to create an object that contains 
the number of times each string occured in the array. Return the object directly (no need to console.log).
*/

function countWords(inputWords){
    return inputWords.reduce((countWords, word) => {
        countWords[word] = (word in countWords) ? ++countWords[word] : 1;
        return countWords;
    },  {});
}

module.exports = countWords
