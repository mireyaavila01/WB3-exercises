"use strict"

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city,state,zip);
    
}

function addNumbers(num1, num2) {
   
   let num3 = Number(num1) + Number(num2);
   

   console.log(num1 + "+ " + num2 + " = " + num3);
}
    
function displayReceipt(totalDue, amountpaid) {

}

displayMailingLabel();
addNumbers();
displayReceipt();