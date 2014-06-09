/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var isDecreasing = function (seq) {
    if (!Array.isArray(seq)) {
        throw new TypeError('Invalid parameter');
    }
    return !(seq.some(function (a, i) {
        return (a < seq[i + 1]);
    }));
};

exports.isDecreasing = isDecreasing;
