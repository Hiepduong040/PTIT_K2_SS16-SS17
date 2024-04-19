"use strict";
function performOperations(num1, num2) {
    let num3;
    // Cộng
    num3 = +num1 + +num2;
    console.log("Kết quả cộng:", num3);
    // Trừ
    num3 = +num1 - +num2;
    console.log("Kết quả trừ:", num3);
    // Nhân
    num3 = +num1 * +num2;
    console.log("Kết quả nhân:", num3);
    // Chia
    num3 = +num1 / +num2;
    console.log("Kết quả chia:", num3);
}
let num1 = 10;
let num2 = 5;
let num3;
performOperations(num1, num2);
let num4 = "10";
let num5 = true;
performOperations(num4, num5);
