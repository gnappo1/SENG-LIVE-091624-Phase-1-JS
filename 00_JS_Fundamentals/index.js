//! JS Fundamentals Part 1
//"use strict" // use to enforce a stricter set of rules and best-practices


// Single Line Comments
/*
    Multi Line Comments
*/
// Toggle comments using cmd + ? (mac) OR cntr + ? (pc)
// ! Special type of comment!

// Console Logging
// console.log("Hello World!")
// console.warn("Warning message with yellow bg color!")
// console.error("Error message with red bg color!")

// Debugging
//! VSC debugger, play button with the little bug
//! Add a breakpoint by clicking on the left of the line number

// Variables
var profession = "Software Engineering Instructor" //! YES to re-declaration, re-assignment DO NOT USE PLEASE
let name = "Matteo" //! CANNOT BE RE-DECLARED, YES to re-assignment, HOISTING?
let height; //! Can be declared without being assigned a value

const age = 32; //! CANNOT BE RE-DECLARED, CANNOT BE re-assigned, HOISTING? Cannot be declared without being assigned a value.
// tenure = 5 //! SUPER EVIL: IMPLICIT GLOBAL will break when in strict mode!!!

// 10-minute Break

// Data Types
// 1. String => `, ', "
// 2. Number => integer, decimal/float, complex
// 3. Boolean => true, false
// 4. Object => anything** in JS is an object, arrays are a sub-type of object
// 5. Null => intentionally lacking a value
// 6. Undefined => a value has not been assigned yet
// 7. Symbol => (ES6)
// 8. BigInt => (+- 2^53 + 1)

//! Truthiness and Falseness
//? Falsey
// 1. ""
// 2. 0, 0.0
// 3. false
// 4. null
// 5. undefined

//? Truthy
// 1. {}
// 2. []

// console.log('Hello my name is ' + name) //! CONCATENATION
// console.log(`Hello my name is ${name}`) //! STRING INTERPOLATION

// Conditional Statements
// 1. if/else if/else
// if (name.startsWith("W")) {
//     console.log(`The name ${name} starts with the letter W`)
// } else if (name.startsWith("X")) {
//     console.log(`The name ${name} starts with the letter X`)
// } else {
//     console.log(`The name ${name} does not start with the letter W nor the letter M`)
// }

// 2. Switch Statements
// switch (name) {
//     case "Matteoh":
//         console.log("The name is Matteoh")
//         break
//     case "Matteo":
//         console.log("The name is Matteo")
//         break
//     case "Marco":
//         console.log("The name is Marco")
//         break
//     default:
//         console.log("What a weird name!")
// }

// Ternary Expressions
// to promote readability, stay on one line when you have a 2-case scenarion
// console.log(name === "Matteo" ? "We found Matteo!" : "We did not find Matteo!");

// condition ? whatToDoIfTruthy : whatToDoIfFalsey

// Loops
// 1. While
// let counter = 0 //! set up a counter variable
// while (counter < 10) { //! stop condition
//     console.log(counter)
//     counter++ //! incrementation line
// }

// 2. For loop
// for (let counter = 0; counter < 10; counter++) {
//     console.log(counter)
// }