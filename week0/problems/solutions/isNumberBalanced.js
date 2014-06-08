// solution here
var isNumberBalanced = function(n) {
    if(typeof n !== "number" || n%1 !==0){
        throw new TypeError("invalid argument");
    }
    if(parseInt(n/10) === 0){
        return true;
    }
    var digits = n.toString().split("");
    if(digits[0] === "-"){
        digits.shift();
    }
    var num = digits.length;
    var firstHalf = digits.slice(0,parseInt(num/2));
    if(num%2 === 0){
        var secondHalf = digits.slice(parseInt(num/2));
    }
    else{
        var secondHalf = digits.slice(parseInt(num/2)+1);
    }

    var firstNum = firstHalf.reduce(function(a,b){return parseInt(a) + parseInt(b)});
    var secondNum = secondHalf.reduce(function(a,b){return parseInt(a) + parseInt(b)});
    return (firstNum === secondNum);
}

console.log(is_number_balanced(-121));