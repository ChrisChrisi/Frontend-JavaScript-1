// solution here
var sumOfDigits = function(n){
    return n.toString().split("").map(function(a){return parseInt(a);}).filter(function(a){return !isNaN(a) ;}).reduce(function(a,b){return a + b;});
};

exports.sumOfDigits = sumOfDigits;