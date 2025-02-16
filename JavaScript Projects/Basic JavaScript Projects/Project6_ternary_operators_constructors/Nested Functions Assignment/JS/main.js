// Function with nested function
function showMessage() {
    let text = "Hello"; // Outer function variable

    function addText() { // Nested function
        text += ", lets vote!"; // Modify the text variable
    }

    addText(); // Call the nested function

    // Display the result 
    document.getElementById("message").innerHTML = text;
}
