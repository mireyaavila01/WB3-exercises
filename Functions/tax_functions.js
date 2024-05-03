"use strict"

function getSocSecTax(grosspay) {
    let socialSecurityTax;

    socialSecurityTax = grosspay * .062;

    return socialSecurityTax;

}




function getMedicareTax(grosspay) {
    let medicareTax;

    medicareTax = grosspay * .0145;
    
    return medicareTax;

}



function getFederalTax(grosspay, withholdingCode) {
    let federalTax;

    if (withholdingCode == 0){
        withholdingCode = .23;
        
    }

    else if (withholdingCode == 1){
        withholdingCode = .21;
    }

    else if (withholdingCode == 2){
        withholdingCode = .195;
    }

    else if (withholdingCode == 3){
        withholdingCode = .185;
    }

   
    else if (withholdingCode >= 4){
        withholdingCode = .18 * (withholdingCode - 4)*(0.5);
    }

    

    federalTax = grosspay * withholdingCode
    return federalTax;
    
}

console.log(getSocSecTax(5000));

console.log("-------------------");

console.log(getMedicareTax(5000));

console.log("-------------------");


console.log(getFederalTax(750,0));
console.log(getFederalTax(1550,2));
console.log(getFederalTax(1100,6));