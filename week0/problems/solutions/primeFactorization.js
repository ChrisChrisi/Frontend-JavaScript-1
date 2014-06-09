// solution here
var isPrime = function (n) {
    if(typeof n !== "number" || n%1 !== 0 || n<0){
        throw new TypeError("The argument should be positive integer number");
    }
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    var allNums = Array.apply(null, {length: (n)}).map(Number.call, Number).filter(function (a) {
        return (a % 2 != 0)
    });
    allNums = allNums.slice(1);

    return !(allNums.some(function (a) {
        return (n % a) === 0;
    }));
};

var primeFactorization = function (num) {
    if(typeof num !== "number" || num%1 !== 0 || num<0){
        throw new TypeError("The argument should be positive integer number");
    }
    if (isPrime(num)) {
        return [
            [num, 1]
        ]
    }
    else {
        var allNums = Array.apply(null, {length: (num)}).map(Number.call, Number).filter(function (a) {
            return (a % 2 != 0)
        });
        allNums = allNums.slice(1);
        allNums.unshift(2);
        allNums = allNums.filter(function (a) {
            return (isPrime(a) && (num % a === 0));
        });

        var result =[];
        allNums.forEach(function(a){
            var count = 0;
            while(num % a === 0){
                count += 1;
                num = parseInt(num / a);
            }
            result.push([a, count]);
        });
        return result;
    }
};

exports.primeFactorization = primeFactorization;