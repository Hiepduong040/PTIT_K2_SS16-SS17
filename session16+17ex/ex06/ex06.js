"use strict";
function Compare(num1, num2) {
    if (typeof num1 === typeof num2) {
        return num1 === num2;
    }
    return false;
}
let num1 = "2";
let num2 = 2;
console.log(Compare(num1, num2));
