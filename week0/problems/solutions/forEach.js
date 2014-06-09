// solution here
"use strict";



var forEach = function(f,arr){

    if(!Array.isArray(arr) || arr.length < 1){
        throw new TypeError('Invalid parameter');
    }

    var i = 0;

    var n = arr.length;

    for(i; i< n; i+=1){

      f(arr[i], i, arr);

    }

};
var addOne = function(a){return a + 1;};
var arr = [1,2,3];
console.log(forEach(addOne, arr));

exports.forEach = forEach;