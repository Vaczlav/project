// Function that performs an addition operation and updates the paragraph text
function performAddition() {
    let num1 = 12; // First number
    let num2 = 8;  // Second number
    let sum = num1 + num2; // Adding the two numbers

    // Updating the paragraph text with the result
    document.getElementById("Math").innerHTML = num1 + " + " + num2 + " = " + sum;
}

// Function that performs a subtraction operation and updates the paragraph text
function performSubtraction() {
    let num3 = 15; // First number for subtraction
    let num4 = 12; // Second number for subtraction
    let result = num3 - num4; // Subtracting num4 from num3
    
    // Updating the paragraph text with the subtraction result
    document.getElementById("Math").innerHTML = num3 + " - " + num4 + " = " + result;
}
function multiplication() {
    var simple_multiplication = 6 * 8;
    document.getElementById("MultiplyResult").innerHTML = "6 x 8 = " + simple_multiplication;
}

function division() {
    var simple_division = 48 / 6;
    document.getElementById("DivideResult").innerHTML = "48 / 6 = " + simple_division;
}

function ModulusResult() {
    var simple_modulus = 49 % 6;
    document.getElementById("ModulusResult").innerHTML = "49 % 6 = " + simple_modulus;
}

window.onload = function() {
    let number = 10;
    let negatedNumber = -number;

    // Show number and negation result
    document.getElementById("output").innerText = `Number: ${number}, Negated: ${negatedNumber}`;

    // Increment operator
    number++;
    let incrementedNumber = number;

    // Decrement operator
    number--;
    let decrementedNumber = number;

    // Display incremented and decremented values
    document.getElementById("incrementDecrementOutput").innerText = 
        `Incremented: ${incrementedNumber}\nDecremented: ${decrementedNumber}`;

    // Generate a random number
    let randomNumber = Math.random();

    // Display the random number
    document.getElementById("randomOutput").innerText = `Random number: ${randomNumber}`;

    // Using Math methods on a simple number
    let simpleNumber = 4.7;
    let rounded = Math.round(simpleNumber);

    // Display Math object method results
    document.getElementById("simpleNumberOutput").innerText = `Original number: ${simpleNumber}`;
    document.getElementById("roundOutput").innerText = `Rounded: ${rounded}`;
};
