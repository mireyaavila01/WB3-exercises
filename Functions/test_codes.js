"use strict"


function test1() {
    let a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log("a = " + a);
}
test1(); //the output is a=7


/*
function test2A() {
    if (1 == 1) {
        var a = 5;
    }
    console.log("a = " + a);
}
test2A(); //the output is a=5
*/


/*
function test2B() {
    if (1 == 1) {
        let a = 5;
    }
    console.log("a = " + a); 
}
test2B(); //no result because a is not defined
*/


/*
let a = 4;
function test3() {
    a = 3;
    console.log("a = " + a);
}
test3();
console.log("a = " + a);  //the output is  a= 3 a=3
*/


/*
let a = 4;
function test4() {
 let a = 7;
 console.log("a = " + a);
}
test4();
console.log("a = " + a); //the output is a=7 a=4
*/
                 

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
console.log("a = " + a); //the output is  a=8  a=7  a=7
*/

                        

/*
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
console.log("a = " + a); //the output is  a=8  a=7 a=4
*/