// solution here
"use strict";

var isPrime = function(n) {
    if(typeof n !== "number" || n%1 !== 0){
        throw new TypeError("The input should be integer!");
    }
if(n === 2){
	return true;
}
if (n === 1){
	return false;
}
var arr = Array.apply(null, {length: (Math.abs(n)+1)}).map(Number.call, Number);
 arr = arr.slice(2);

if(arr.filter(function(a){return (Math.abs(n) % a === 0); }).reduce(function(a,b){ return a + b;}) === Math.abs(n)){
	return true;
}
else {
	return false;
}
};

exports.isPrime = isPrime;