"use strict"



let partCode = "MYA:275656543-large";
let partNum, size, supplier;
let semiColPos= partCode.indexOf(":");
let dashPos = partCode.indexOf("-");
supplier = partCode.substring(0, semiColPos);
partNum = partCode.substring(semiColPos, dashPos);
size = partCode.substring(dashPos + 1);
console.log()
console.log(partNum);
console.log(size);
