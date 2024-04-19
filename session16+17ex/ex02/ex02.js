"use strict";
function convert(arr, num1, num2) {
    if (num1 < 0 || num1 >= arr.length || num2 < 0 || num2 >= arr.length) {
        return "Không hợp lệ";
    }
    let result = [...arr];
    let temp = result[num1];
    result[num1] = result[num2];
    result[num2] = temp;
    return result;
}
let arr = [1, 3, 4, 5, 9];
console.log(convert(arr, 2, 4));
