// Function to check the number
function checkNumber() {
    let num = Number(document.getElementById("numInput").value);
    
    // Check if the number is less than 7
    if (num < 7) {
        // If the condition is true, display this message
        document.getElementById("result").innerHTML = "The number is less than 7.";
    } else {
        // Otherwise, display this message
        document.getElementById("result").innerHTML = "The number is 7 or greater.";
    }
}
