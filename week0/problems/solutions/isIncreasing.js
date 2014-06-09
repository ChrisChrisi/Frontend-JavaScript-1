// solution here

var isIncreasing = function (seq) {
    if(!Array.isArray(seq)){
        throw new TypeError('Invalid parameter');
    }
    return !(seq.some(function (a, i) {
        return a >= seq[i + 1];
    }));
};

exports.isIncreasing = isIncreasing;