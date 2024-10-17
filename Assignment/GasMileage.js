let yourName = prompt("Who are you?"); 

let theNumber = Number(prompt("Pick a number"));
 if (!Number.isNaN(theNumber)) {
 console.log("Your number is the square root of " +
 theNumber * theNumber);
 }