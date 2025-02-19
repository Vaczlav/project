// Function to concatenate two strings
function combineStrings() {
    let string1 = "Hello, ";
    let string2 = "world!";
    
// concat() method 
    let result = string1.concat(string2);
    
    document.getElementById("concatResult").innerHTML = result;
}

// slice function
function sliceMethod() {
    var sentence = "slice() Method Assignment.";
    
    var section = sentence.slice(8, 25);
    
// Displaying the result 
    document.getElementById("sliceResult").innerHTML = section;
}

// uppercase function
function convertToUpperCase() {
    let text = "javascript";
    document.getElementById("upperCaseResult").innerHTML = text.toUpperCase();
}

// search function
function searchText() {
    let sentence = "JavaScript is fun";
    document.getElementById("searchResult").innerHTML = sentence.search("fun");
}

// toString function 
function numbertToString() { 
    var number = 182;
    document.getElementById("numberToStringResult").innerHTML = number.toString();
}

// toPrecision function
function precisionMethod() {
    var piNumber = 3.141592653589793; // Pi number
    var precisionResult = piNumber.toPrecision(3); // Setting precision to 3 digits
    document.getElementById("precisionResult").innerHTML = precisionResult;
}


// toFixed function
function fixedMethod() {
    var number = 3.141592653589793; // Pi number
    var fixedResult = number.toFixed(2); // Keeps 2 decimal places
    document.getElementById("fixedResult").innerHTML = fixedResult;
}