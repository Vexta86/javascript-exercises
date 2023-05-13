const reverseString = function(text) {
    let arrayText = text.split("").reverse();
    let output = ""
    for (let i = 0; i < arrayText.length; i++){
        output += reversedArray[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
