function Compare<T, U>(num1: T, num2: U): boolean {
    if (typeof num1 === typeof num2) {
        return num1 === num2;
    }
    return false;
}

let num1: string = "2";
let num2: number = 2;

console.log(Compare(num1, num2)); 