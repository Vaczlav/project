let myVariable = "10";
document.write("The type of myVariable is: " + typeof myVariable + "<br>");
let myVariableNumber = 10;
document.write("The type of myVariableNumber is: " + typeof myVariableNumber + "<br>");
// type coercion: number is converted to a string
let result = "5" + 10; 
document.write("<p>Result: " + result + " (Type: " + typeof result + ")</p>");

// Generate NaN by dividing 0 by 0
let resultNaN = 0 / 0;
document.write("<p>NaN Example: " + resultNaN + "</p>"); // NaN

// Generate Infinity by dividing 1 by 0
let resultInf = 1 / 0;
document.write("<p>NaN Example: " + resultInf + "</p>"); // Infinity

// Utilize the isNaN() function to make the browser display “true.”
let testTrue = isNaN("Hello");
document.write("<p>isNaN('Hello') = " + testTrue + "</p>"); // true

// Utilize the isNaN() function to make the browser display “false.”
let testFalse = isNaN(777);
document.write("<p>isNaN(777) = " + testFalse + "</p>"); // false

window.onload = function () {
    // Assign a very large number to trigger Infinity
    let largeNumber = 2e308;
    document.getElementById("positiveInfinity").innerHTML = "Positive Infinity: " + largeNumber;

    // Assign a very small negative number to trigger -Infinity
    let smallNumber = -2e308;
    document.getElementById("negativeInfinity").innerHTML = "Negative Infinity: " + smallNumber;

    // Boolean logic examples
    let trueStatement = (10 > 5) && (20 < 30);
    document.getElementById("trueResult").innerHTML = "Boolean True: " + trueStatement;

    let falseStatement = (5 > 10) || (30 < 20);
    document.getElementById("falseResult").innerHTML = "Boolean False: " + falseStatement;

    // Using console.log() to perform a math operation
    let num1 = 10;
    let num2 = 5;
    
    console.log("Math Operation Example:");
    console.log("Addition:", num1 + num2); // 10 + 5 = 15
    console.log("Subtraction:", num1 - num2); // 10 - 5 = 5
    console.log("Multiplication:", num1 * num2); // 10 * 5 = 50
    console.log("Division:", num1 / num2); // 10 / 5 = 2
    console.log("Exponentiation:", num1 ** num2); // 10^5 = 100000

    // Boolean Challenge
    let booleanFalse = (10 < 5) && (20 > 50); // Both conditions are false
    console.log("Boolean Challenge (should be false):", booleanFalse);

    // Double Equal Signs Assignment
    let equalityTrue = (5 == "5");  //  returns true
    let equalityFalse = (5 == 10);  //  return false

    document.getElementById("trueResult").innerHTML += "<br>Equality Check (True): " + equalityTrue;
    document.getElementById("falseResult").innerHTML += "<br>Equality Check (False): " + equalityFalse;

    console.log("Equality Check (True):", equalityTrue); // true
    console.log("Equality Check (False):", equalityFalse); // false

    // Triple Equal Signs Assignment
    let strictTrue = (10 === 10);  //  true
    let strictFalse1 = (10 === "10");  //  false
    let strictFalse2 = ("hello" === 100);  //  false
    let strictFalse3 = (50 === 25);  // false

    document.getElementById("trueResult").innerHTML += "<br>Strict Equality Check (True): " + strictTrue;
    document.getElementById("falseResult").innerHTML += "<br>Strict Equality Check (False - Different Type, Same Value): " + strictFalse1;
    document.getElementById("falseResult").innerHTML += "<br>Strict Equality Check (False - Different Type, Different Value): " + strictFalse2;
    document.getElementById("falseResult").innerHTML += "<br>Strict Equality Check (False - Same Type, Different Value): " + strictFalse3;

    console.log("Strict Equality Check (True):", strictTrue); // true
    console.log("Strict Equality Check (False - Different Type, Same Value):", strictFalse1); // false
    console.log("Strict Equality Check (False - Different Type, Different Value):", strictFalse2); // false
    console.log("Strict Equality Check (False - Same Type, Different Value):", strictFalse3); // false

    // AND Operator Assignment (&&)
    let andTrue = (10 > 5) && (20 > 15); // Both true → true
    let andFalse = (10 > 5) && (20 < 15); // One false → false

    document.getElementById("trueResult").innerHTML += "<br>AND Operator (True): " + andTrue;
    document.getElementById("falseResult").innerHTML += "<br>AND Operator (False): " + andFalse;

    console.log("AND Operator (True):", andTrue); // true
    console.log("AND Operator (False):", andFalse); // false

    // OR Operator Assignment (||)
    let orTrue = (10 < 5) || (20 > 15); // One true → true
    let orFalse = (10 < 5) || (20 < 15); // Both false → false

    document.getElementById("trueResult").innerHTML += "<br>OR Operator (True): " + orTrue;
    document.getElementById("falseResult").innerHTML += "<br>OR Operator (False): " + orFalse;

    console.log("OR Operator (True):", orTrue); // true
    console.log("OR Operator (False):", orFalse); // false

    // NOT Operator Assignment (!)
    let notTrue = !(10 < 5); // 10 < 5 is false, !false → true
    let notFalse = !(10 > 5); // 10 > 5 is true, !true → false

    document.getElementById("trueResult").innerHTML += "<br>NOT Operator (True): " + notTrue;
    document.getElementById("falseResult").innerHTML += "<br>NOT Operator (False): " + notFalse;

    console.log("NOT Operator (True):", notTrue); // true
    console.log("NOT Operator (False):", notFalse); // false
};