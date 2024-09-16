//! JS Fundamentals Part 1
//"use strict" // use to enforce a stricter set of rules and best-practices


//TODO Commenting Code
// Toggle comments using cmd + ? (mac) OR cntr + ? (pc)
// Single Line Comments
/*
    Multi Line Comments
*/


//TODO Console Logging
// console.log("test")
// console.warn("warn")
// console.error("error")

//TODO Debugging
//! VSC debugger, play button with the little bug
//! Add a breakpoint by clicking on the left of the line number
//! or use the debugger keyword when working in the browser

//TODO Variables
// re-declaration: var
// re-assignment: var, let
// scope: let/const block-scope, var function-scope

var name = "Matteo"

let age = 33
age = false
let total;

const profession = "coder"

//TODO Data Types
//! check in REPL using typeof -> typeof true
//! Primitive
// 1. String
// 2. Number (integers, decimal/float, complex)
// 3. Boolean (true, false)
// 4. Undefined
// 5. Null
// 6. BigInt (2^53 -1) EXTREMELY large numbers that need byte space
// 7. Symbol used as keys for objects because of their uniqueness property (as opposed to strings)

// Structured
// 1. Object (Arrays are a subtype of objects)

//TODO Truthiness and Falseness
//! Falsey: 0, "", null, undefined, NaN, false
//! Truthy: " ", 0.1, true, [], {}


//TODO String Interpolation VS Concatenation
// console.log(`This is my name: ${name}`)
// console.log("This is my name: " + name)

//TODO Conditional Statements
// 1. if/else if/else
// if (name === "MATTEO") {
//     console.log("all caps")
// } else if (name === "Matteo") {
//     console.log("capitalized")
// } else {
//     console.log("random case")
// }

// 2. Switch Statements
// switch (name) {
//     case "MATTEO":
//         console.log("all caps")
//         break;
//     case "Matteo":
//         console.log("capitalized")
//         break;
//     default:
//         console.log("random case")
// }

// Ternary Expressions
// condition ? do something if truthy : do something if falsey
name === "Matteo" ? console.log("capitalized") : console.log("random case")

//TODO Loops
// 1. While

// 2. For loop