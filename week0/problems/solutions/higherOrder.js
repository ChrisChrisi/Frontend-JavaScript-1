// map, filter, reduce, any, all
// map, filter, reduce, any, all
var map = function(f, arr){
    if(!Array.isArray(arr)){
        throw new TypeError("The second argument should be string!");
    }
    var result = []
    //return f(arr[i], i, arr);
    arr.forEach (function( a,i){
        result.push(f(a, i));
    });
    return result;
};

var filter = function(pred,arr){
    if(!Array.isArray(arr)){
        throw new TypeError("The second argument should be string!");
    }

    var result = [];
    arr.forEach(function(a){
        if(pred(a)){
            result.push(a);
        }
    });
    return result;
};

var reduce =  function(arr,f, first){
    if(!Array.isArray(arr)){
        throw new TypeError("The first argument should be string!");
    }
    if(typeof first != 'undefined'){
        accumulate = first;
    }
    else {
        var accumulate = arr.shift();
    }
    arr.forEach(function(a){
        accumulate = f(accumulate, a);
    });

    return accumulate;
};

var any  = function(f, arr){
    if(!Array.isArray(arr)){
        throw new TypeError("The second argument should be string!");
    }
    var i = 0;
    var n = arr.length;
    for(i; i< n; i++){
        if(f(arr[i])){
            return true;
        }
    }

    return false;
};

var all  = function(f, arr){
    if(!Array.isArray(arr)){
        throw new TypeError("The second argument should be string!");
    }
    var i = 0;
    var n = arr.length;
    for(i; i< n; i++){
        if(!f(arr[i])){
            return false;
        }
    }

    return true;
};

