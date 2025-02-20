function Call_Loop() {
    let text = '<span style="color: red; font-weight: bold;">count</span><br>'; // Variable to store loop output
    let i = 1; // Initial value 
  
    // While loop to count from 1 to 10
    while (i <= 10) {
      text += i + "<br>"; // Append number 
      i++; // Increment counter
    }
  
    // Display output 
    document.getElementById("Loop").innerHTML = text;
  }
  

  //For Loop Assignment
  // New function: Count down from 10 to 1
function ReverseForLoop() {
    let text = '<span style="color: blue; font-weight: bold;">count down</span><br>'; // Style
    let i = 10; 

    while (i >= 1) {
        text += i + "<br>"; 
        i--; // Decrement counter
    }

    // Display output 
    document.getElementById("ReverseForLoop").innerHTML = text;
}

// document.getElementById().innerHTML Assignment
function array_Function() {
  // Array with laptops brand
  let Leptop = ["Lenovo", "Apple", "Thinkpad", "Acer", "HP", "MSI"];

  // Select one 
  let selectedLaptop = Leptop[2];

  // Display the selected Laptop
  document.getElementById("Array").innerHTML = "Selected Leptop: " + selectedLaptop;
}

// Const Keyword Assignment
const Musical_Instrument = {
  type: "guitar",
  brand: "Fender",
  color: "black"
};

function constant_function() {
  // Changing a property
  Musical_Instrument.color = "blue";

  // Adding a new property
  Musical_Instrument.price = "$1000";

  // Displaying updated object details
  document.getElementById("Constant").innerHTML =
      "The " + Musical_Instrument.color + " " + Musical_Instrument.brand + " " + Musical_Instrument.type +
      " costs " + Musical_Instrument.price + ".";
}


// Let Keyword Assignment
function let_keyword_example() {
  let message = "Hello, World!"; 
  document.getElementById("LetExample").innerHTML = message; 
}

// Return Statement Example
function addNumbers(a, b) {
  return a + b; // Returns the sum of two numbers
}

function showSum() {
  let result = addNumbers(10, 5); // Call addNumbers and store the result
  document.getElementById("ReturnExample").innerHTML = "The sum is: " + result;
}

// Laptop Object Example
let laptop = {
  brand: "Dell",
  model: "XPS 15",
  year: 2025,
  color: "Silver",
  specs: {
      cpu: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD"
  },
  description: function() {
      return "The laptop is a " + this.year + " " + this.color + " " + this.brand + " " + this.model +
             " with " + this.specs.cpu + ", " + this.specs.ram + " RAM, and " + this.specs.storage + ".";
  }
};

function displayLaptopInfo() {
    document.getElementById("LaptopExample").innerHTML = laptop.description();
}
