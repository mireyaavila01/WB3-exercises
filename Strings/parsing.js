"use strict"


function parseAndDisplayName(name) {
   
//calculations
    let space = name.indexOf(" ");
    let first = name.substring(0, space);
    let last = name.substring(space + 1);



    console.log(name.indexOf(" "));
    console.log("Name: " + name);
    console.log("First Name: " + first);
    console.log("Last Name: " + last);

}
//call the results 
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");