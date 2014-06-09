// solution here
var allVowels = "aeiouy";

var vowelsInAString= function(str){
    if(typeof str !== "string"){
        throw new TypeError("The input should be string");
    }

    var letters = str.toLowerCase().split("");
    var result = 0;

    letters.forEach(function(a){
        if(allVowels.indexOf(a) >= 0){
            result += 1;
        }
    });
    return result;
};

exports.vowelsInAString = vowelsInAString;