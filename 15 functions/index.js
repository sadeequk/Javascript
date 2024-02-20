// FUNCTIONS

// JavaScript functions are blocks of reusable code that can be defined and called to perform specific tasks or operations.
//  They are a fundamental building block of JavaScript and play a crucial role in organizing and structuring your code. Here are the details of JavaScript functions:



// function functionName(parameter1, parameter2, ...) {
//     // Function body
//     // Code to be executed when the function is called
//     return result; // Optional
// }



// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet);


// A function expression defines an anonymous function and assigns it to a variable.
//  It has a similar structure to function declarations but without a function name:
// const functionName = function(parameter1, parameter2, ...) {
//     // Function body
//     // Code to be executed when the function is called
//     return result; // Optional
// };

// example
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// const result = greet("John"); // Calling the greet function
// console.log(result); // Output: Hello, John!


// Parameters are placeholders in the function declaration or expression, and they represent values that the function expects to receive when called.
// Arguments are the actual values passed to the function when it's called
// function add(a, b) {
//     return a + b;
// }

// const sum = add(3, 5); // Here, 3 and 5 are arguments






// Functions can optionally use the return statement to send a value back to the caller.
//  If there's no return statement or it doesn't specify a value, the function returns undefined.

// function multiply(a, b) {
//     return a * b;
//  }
 
//  const result = multiply(2, 4); // result will be 8
 



// Variables declared within a function are usually local to that function, meaning they are only accessible from within the function. 
// This concept is known as "function scope."



// Function Overloading:
// JavaScript does not support true function overloading (defining multiple functions with the same name but different parameter lists)
//  like some other languages. However, you can use conditional logic within a function to achieve similar behavior.



// Callback Functions:

// Functions can be passed as arguments to other functions, allowing you to create callback functions, 
// which are executed at a later time, often in response to an event or asynchronous operation.

// // function doSomething(callback) {
//    // ... do some work ...
//    callback(); // Execute the callback function
// }

// doSomething(function() {
//    console.log("Callback function executed.");
// });



// Arrow functions provide a more concise syntax for defining functions, especially for simple one-liner functions
// const add = (a, b) => a + b;