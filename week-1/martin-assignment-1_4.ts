/*
============================================
; Title: Assignment 1.4
; Author: Troy Martin
; Date: 09/06/2019
; Modified By: Troy Martin
; Description: TypeScript
;===========================================
*/
// start program

/*
; Expected output:
; Troy Martin
; Assignment 1.4
; {{date time}}
;
; Hello Fred Flintstone
;
*/

// variable declaration and assignment
// declare and set the date time for the header output
const firstName = "Fred";
const lastName = "Flintstone";

// function declaration
/*
; Params: firstName: string, lastName: string
; Response: Hello {firstName} {lastName}
; Description: Return a message using the provided first and last name
*/
function myName(firstName: string, lastName: string){
  // return the message concatenating the first and last name
  return `Hello ${firstName} ${lastName}`;
}

// output
// Call the console log function and output a well-formatted header
console.log("Troy Martin");
console.log("Assignment 1.4");
console.log(new Date().toLocaleDateString('en-US'));
console.log("");

// Call the console log function and output the result of the myName function
console.log(myName(firstName, lastName));

// end program
