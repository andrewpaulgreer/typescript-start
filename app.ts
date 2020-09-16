function add(n1: number, n2: number) {
    return n1+ n2;
}

// void after the num: number means that this function will have no return statement
// undefined is also a type in typescript it means you will have a return statement with no value
function printResult(num: number): void {
    console.log('Result: ' + num);
}

// callback function type
function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
 const result =n1 + n2
 cb(result)
}

printResult(add(5,12));

// function types -- if you give arguements to the specific type it will restrict which funcitons you can pass
let combineValues: (a: number, b: number)=> number;
combineValues = add;
// combineValues = printResult; - error, since it does not deal with numbers



console.log(combineValues(8,8))
// let someValue: undefined


// calling the callback with funciton type
addAndHandle(10 ,20, (result)=> {
    console.log(result)
   // will not return anything here since we said void earlier
})