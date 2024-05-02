"use strict"

let partCode = "MYA:12345-L"

function getSupplier(partCode){

    let partSupplier = partCode.substring(0, ":");
    console.log("the supplier is " + partSupplier);
}

function getProductNumber(partCode){

    let productNumber = partCode.substring(4, 9);
    console.log("the product number is " + productNumber);
}

function getSize(partCode){

    let partSize = partCode.substring(10);
    console.log("the part size " + partSize);

}

getSupplier(partCode);
getProductNumber(partCode);
getSize(partCode);