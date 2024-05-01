"use strict"

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city, state, zip);
    console.log("-------------------")
}


function addNumbers(num1, num2) {

    let num3 = Number(num1) + Number(num2);


    console.log(num1 + " + " + num2 + " = " + num3);

   
}

function displayReceipt(totalDue, amountPaid) {

        console.log("Total Due: $" + totalDue);
        console.log("Amount Paid: $" + amountPaid);

    if (amountPaid >= totalDue) 
    {
        let changeDue = amountPaid - totalDue;
        console.log("Change Due: $" + changeDue);
    }
    else if (amountPaid < totalDue) {

            let remainingBalance = totalDue - amountPaid;
            let message = "Please pay the remaining balance of $" + remainingBalance;
            console.log(message);

    }

    console.log("-------------------")
}

//results

displayMailingLabel("Mireya", "123 cherry lane", "Atlanta,", "GA,", "30060");
displayMailingLabel("Ben", "456 oak lane", "Atlanta,", "GA,", "30060");


addNumbers(2, 4);
addNumbers(10, 5);

console.log("-------------------")
displayReceipt(50, 60);
displayReceipt(80, 80);
displayReceipt(100, 60);
