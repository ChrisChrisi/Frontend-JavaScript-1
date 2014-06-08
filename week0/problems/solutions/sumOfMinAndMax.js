// solution here
var sum_of_min_and_max = function(arr) {
    var sortedArr = arr.sort(function(a,b){return (a - b);});

    return (sortedArr[0] +  sortedArr[sortedArr.length - 1] );
}