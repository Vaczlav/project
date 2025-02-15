// Define the function that will be called when the button is clicked
function changeText() {
    // Declare two variables
    var greeting = "Hello, ";
    var name = "World!";
    
    // Use document.getElementById to find the paragraph and change its text
    document.getElementById("output").innerHTML = greeting + name;
}
