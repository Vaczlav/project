// Form validation function
function validateForm() {
    // Get form values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error_message");

    // Clear previous error message
    errorMessage.innerHTML = "";

    // Basic validation rules
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        errorMessage.innerHTML = "All fields are required!";
        return false; // Prevent form submission
    }

    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address!";
        return false; // Prevent form submission
    }

    // If everything is valid
    alert("Form submitted successfully!");
    return true;
}
