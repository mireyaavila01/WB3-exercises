"use strict";
const months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];

 const daysName = [ "Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday",]

 //variables
let currentDate = new Date();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let day = currentDate.getDay();

//calculations
console.log(currentDate);
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getDay());

console.log(currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear() + "(" + daysName[currentDate.getDay()] + ")");
