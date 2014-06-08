// solution here
var list_to_number = function(digits){
    if(!Array.isArray(digits)){
       throw new TypeError("the argument should be array");
    }

    if(!digits.every(function(a){
        return (typeof a === "number"  && a%1 === 0)
    })){
        throw new TypeError("the array's elements should be integer number");
    }
    return digits.reduce(function(a, b){
        return a.toString() + b.toString();
    });
};
