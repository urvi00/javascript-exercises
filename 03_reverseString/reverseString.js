const reverseString = function(inputString) {
    var input_array = inputString.split('');
    var reversedString = '';
    for (var i=input_array.length-1; i>-1; i--) {
        reversedString = reversedString+input_array[i];
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
