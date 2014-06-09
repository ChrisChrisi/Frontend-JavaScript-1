/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
*/
var stringFormat = function (string, dict) {
    if(typeof string !== "string" || typeof dict !== "object"){
        throw new TypeError("The first argument should be string, the second dictionary ");
    }
    var words = string.match(/{([^}]+)}/g).map(function (a) {
        return a.replace(/[{}]/g, "")
    });
    words.forEach(function (word) {
        // if something is in brackets, but there's no suck key in the dictionary it cannot be replaced.
        if(typeof dict[word] != 'undefined'){
            string = string.replace('{' + word + '}', dict[word]);
        }
    });

    return string;
};

exports.stringFormat = stringFormat;