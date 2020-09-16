function add(n1, n2) {
    return n1 + n2;
}
// void after the num: number means that this function will have no return statement
// undefined is also a type in typescript it means you will have a return statement with no value
function printResult(num) {
    console.log('Result: ' + num);
}
// callback function type
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// function types -- if you give arguements to the specific type it will restrict which funcitons you can pass
var combineValues;
combineValues = add;
// combineValues = printResult; - error, since it does not deal with numbers
console.log(combineValues(8, 8));
// let someValue: undefined
// calling the callback with funciton type
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
