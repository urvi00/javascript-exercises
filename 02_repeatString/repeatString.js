const repeatString = function(str, num) {
var new_str = ''
if (num<0) {
    return 'ERROR'
} else {
    for (var i=0; i<num; i++) {
        new_str = new_str+str;
    }
    return new_str;
}
};

// Do not edit below this line
module.exports = repeatString;
