const removeFromArray = function(input, ...args) {
    for (j=0; j<args.length; j++) {
        for (i=0; i<input.length; i++) {
            if (input[i]===args[j]) {
                input.splice(i, 1);
            } 
        }
    }
    
return input;
};

// Do not edit below this line
module.exports = removeFromArray;
