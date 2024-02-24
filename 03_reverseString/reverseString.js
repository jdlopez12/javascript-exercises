const reverseString = function(word) {

    let reversedWord = '';
    for (let index = word.length - 1; index >= 0; index--) {
        reversedWord = reversedWord + word[index];
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
