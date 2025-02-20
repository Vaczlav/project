function checkLength() {
    //  user input
    let userInput = document.getElementById("userText").value;

    //  length of the input
    let textLength = userInput.length;

    // Display the length
    document.getElementById("result").innerHTML = 
        'Length of the entered text: ' + textLength;
}
