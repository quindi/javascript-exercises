const repeatString = function (word, nums) {
    if (nums < 0){
        return "ERROR";
    }
    let string = "";
    for (let i = 0; i < nums; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
