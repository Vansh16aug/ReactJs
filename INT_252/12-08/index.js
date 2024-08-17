// Global variable
var globalVariable = "I am a global variable";

function myFunction() {
    // Local variable
    var localVariable = "I am a local variable";
    
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable); // Accessing local variable
}

myFunction(); // Calling the function
console.log(globalVariable); // Accessing global variable outside the function
// console.log(localVariable); // Error: localVariable is not defined