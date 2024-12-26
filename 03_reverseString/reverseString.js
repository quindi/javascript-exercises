const reverseString = function(word) {
    let reverseWord = "";
    let letter = "";

    for(let i = 1; i <= word.length; i++){
        letter = word.charAt(word.length - i);
        reverseWord += letter;
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
