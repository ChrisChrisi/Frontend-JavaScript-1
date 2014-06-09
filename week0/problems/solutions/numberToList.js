// solution here
var numberToList = function(n){
    if(typeof n != "number" || n%1 !== 0|| n <0){
        throw new TypeError("the argument positive integer");
    }
    var result = n.toString().split("");
    result = result.map(function(a){ return parseInt(a);});
    return result;

};

exports.numberToList = numberToList;