// solution here
var number_to_list = function(n){
    if(typeof n != "number"){
        throw new TypeError("the argument should be number");
    }
    return n.toString().split("");
};