// union types

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
   
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    // if(resultConversion == 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString()
    // }
    return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

//as-number is a literal type
const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)