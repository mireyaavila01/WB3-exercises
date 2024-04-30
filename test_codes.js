"use strict"

function test1() {
    let a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log("a = " + a);
}
test1();


function test2A() {
    if (1 == 1) {
        var a = 5;
    }
    console.log("a = " + a);
}
test2A();

/*function test2B() {
    if (1 == 1) {
        let a = 5;
    }
    console.log("a = " + a); 
}
test2B(); //no result because let has to come first
*/


let a = 4;
function test3() {
    a = 3;
    console.log("a = " + a);
}
test3();
console.log("a = " + a);  //a is equal to 3 because a=4 is not inside the function

/*
let a = 4;
function test4() {
 let a = 7;
 console.log("a = " + a);
}
test4();
console.log("a = " + a);
*/                  // error since a is declared twice 

/*
let a = 4;
function test5() {
 a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a);
 }
 again();
 console.log("a = " + a);
}
test5();
console.log("a = " + a);
*/                         //error it declared a twice

let a = 4;
function test6() {
 let a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a);
 }
 again();
 console.log("a = " + a);
}
test6();
console.log("a = " + a); 