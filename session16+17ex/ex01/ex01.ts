let generic = <T>(param: T):T => {
    return param;
}

console.log(generic(1));
console.log(generic("Hiệp"));
console.log(generic(null));
console.log(generic(undefined));