/// === Laptop Switch Function ===
function Laptop_Function() {
    var Laptop_Output;
    var Laptop = document.getElementById("Laptop_Input").value;
    var Laptop_String = " is an excellent laptop brand!";

    switch (Laptop) {
        case "Lenovo":
        case "Apple":
        case "HP":
        case "Dell":
        case "MSI":
            Laptop_Output = Laptop + Laptop_String;
            break;
        default:
            Laptop_Output = "Please enter a brand exactly as written in the list.";
    }

    document.getElementById("Output").innerHTML = Laptop_Output;
}

//Canvas Challenge

const canvas1 = document.getElementById("myCanvas");
if (canvas1.getContext) {
    const ctx1 = canvas1.getContext("2d");
    ctx1.fillStyle = "blue"; // Set fill color
    ctx1.fillRect(50, 30, 200, 80); // Draw a filled rectangle
} else {
    alert("Canvas is not supported in your browser.");
}

// Gradient Color Challenge
const canvas2 = document.getElementById("myGradientCanvas");
if (canvas2.getContext) {
    const ctx2 = canvas2.getContext("2d");

    // Fill entire canvas with Ukrainian flag blue
    ctx2.fillStyle = "#0057B7";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

    // Create gradient over the blue background
    const grd = ctx2.createLinearGradient(0, 0, canvas2.width, 0); // Left to right gradient
    grd.addColorStop(0, "#0057B7"); // Blue
    grd.addColorStop(1, "#FFD700"); // Yellow

    // Apply gradient
    ctx2.fillStyle = grd;
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
} else {
    alert("Canvas is not supported in your browser.");
}
