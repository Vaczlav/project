// Global variable (accessible everywhere)
let globalVar = "Global variable!";

// global variable in the console
function showGlobalVariable() {
    console.log(globalVar);
}

//  local variable in console
function showLocalVariable() {
    let localVar = "Local variable!";
    console.log(localVar);
}

//  inerror in console
function showError() {
    console.log(localVar); // This will cause an error because localVar is not defined here
}

// Function to check the current time and update text in the "simpleTimeCheck" element using a ternary operator
function checkSimpleTime() {
    let hour = new Date().getHours(); // Get current hour (0 - 23)
    document.getElementById("simpleTimeCheck").innerHTML = 
        (hour < 18) ? "It's daytime!" : "It's nighttime!";
}

// Function with a simple if statement to check if a number is greater than 5
function checkNumber() {
    let number = 10; // Example number
    if (number > 5) { // Check if number is greater than 5
        document.getElementById("numberCheck").innerHTML = "The number is greater than 5!";
    }
}

// Call functions to check results in console (the error will appear in the console)
showGlobalVariable();
showLocalVariable();
showError(); // This will produce an error in the console
