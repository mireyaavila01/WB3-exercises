"use strict"

function convertFtoC (fahrenheit){
    let celsius;

    celsius = (fahrenheit -32) * (5 / 9);

    return celsius;

}


let input = 212;
let output = convertFtoC(input);
console.log(output);

input= 90;
output = convertFtoC(input);
console.log(output);

input= 72;
output = convertFtoC(input);
console.log(output);

input= 32;
output = convertFtoC(input);
console.log(output);

input= 0;
output = convertFtoC(input);
console.log(output);

input= -40;
output = convertFtoC(input);
console.log(output);