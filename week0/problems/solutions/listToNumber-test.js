"use strict";

var listToNumber = require("./listToNumber").listToNumber;

exports.testListToNumberThrow = function(test){
    test.throws = function(){
        listToNumber(123);
    };
    test.done();
};

exports.testListToNumberThrow1 = function(test){
    test.throws = function(){
        listToNumber("sdgffg");
    };
    test.done();
};

exports.testListToNumberThrow2 = function(test){
    test.throws = function(){
        listToNumber([2,"sdf",3,8]);
    };
    test.done();
};

exports.testListToNumber1 = function(test){
    test.equal(123,listToNumber([1,2,3]));
    test.done();
};

exports.testListToNumber2 = function(test){
    test.equal(0,listToNumber([]));
    test.done();
};

