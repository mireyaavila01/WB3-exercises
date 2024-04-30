"use strict"


function convertCtoF (celsius){
    let fahrenheit;

    fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;

}


let input = 212;
let output = convertCtoF(input);
console.log(output);

input= 90;
output = convertCtoF(input);
console.log(output);

input= 72;
output = convertCtoF(input);
console.log(output);

input= 32;
output = convertCtoF(input);
console.log(output);

input= 0;
output = convertCtoF(input);
console.log(output);

input= -40;
output = convertCtoF(input);
console.log(output);