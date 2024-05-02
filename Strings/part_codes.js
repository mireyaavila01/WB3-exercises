"use strict"


let partCode = "ABCD:123-S"
let colon = partCode.indexOf(":");
let dash = partCode.indexOf("-");

//calculations

function getSupplier(partCode){
    
    let partSupplier = partCode.substring(0, colon);
    console.log("the supplier is " + partSupplier);
}

function getProductNumber(partCode){

    let productNumber = partCode.substring(colon +1 , dash);
    console.log("the product number is " + productNumber);
}

function getSize(partCode){
    
    let partSize = partCode.substring(dash + 1);
    console.log("the part size " + partSize);

}

//call the results

getSupplier(partCode);
getProductNumber(partCode);
getSize(partCode);