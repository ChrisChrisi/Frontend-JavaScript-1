// solution here
var sumOfDivisors = function(n) {
if(typeof n !== "number" || n%1 !== 0){
    throw new TypeError("The input should be integer!");
}
// generate array of numbers from 1 to n
    var arr = Array.apply(null, {length: Math.abs(n+1)}).map(Number.call, Number);
    arr = arr.slice(1);

    return arr.filter(function(a){return (n % a === 0); }).reduce(function(a,b){ return a + b;});
};

exports.sumOfDivisors = sumOfDivisors;
