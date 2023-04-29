const sumAll = function(num1, num2) {
    var sum = 0;
    var start = 0;
    var end = 0;
    if (typeof(num1)!='number' || typeof(num2)!='number' || num1<0 || num2<0) {
        return 'ERROR';
    } else {
        if (num1<num2) {
            start = num1;
            end = num2;
        } else {
            start = num2;
            end = num1;
        }
        for (var i=start; i<end+1; i++) {
            sum = sum + i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
