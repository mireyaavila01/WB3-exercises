"use strict"

let startDate = "July 11, 2022";
let endDate = "November 11, 2022";


// calculations to covert into milliseconds
let milliSec = Date.parse(startDate);
let milliSec2 = Date.parse(endDate);

console.log(milliSec);
console.log(milliSec2);

// calculations to find difference 
let milliSecPerDay = 1000*60*60*24;
let elapsedMilliseconds = milliSec2 - milliSec;
let dayDiff = elapsedMilliseconds / milliSecPerDay;
let numDays = Math.round(dayDiff);

console.log("The number of days between dates is " + numDays)