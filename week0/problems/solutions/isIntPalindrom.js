// solution here
var isIntPalindrome = function(n) {
    var  numArray = n.toString().split("");
    var dcount = numArray.length;
    var del1 = parseInt(dcount/2);
    var del2;
    if(dcount % 2 === 0){
        del2 = del1;
    }else{
        del2 = del1 +1;
    }
    var firstHalf = numArray.slice(0,del1 );
    var secondHalf = numArray.slice(del2).reverse();


    return firstHalf.sort().toString() === secondHalf.sort().toString();
};
