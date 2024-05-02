"use strict"

let message = "Our corporate offices are located in Dallas";

let newmessage = message.replace("Dallas" , "Austin");

let insensitiveMessage = message.replace(/DALLAS/i, "Austin");

console.log(newmessage);
console.log(insensitiveMessage);