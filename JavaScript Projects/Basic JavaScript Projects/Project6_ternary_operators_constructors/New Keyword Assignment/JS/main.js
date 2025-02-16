// function for creating car objects
function Car(make, model, year, color) {
    this.make = make;   //car make
    this.model = model; //  car model
    this.year = year;   //  car year
    this.color = color; // car color
}

// utilize the new keyword.
let myCar = new Car("Toyota", "Corolla", 2022, "Blue");

// Function that displays car details :
function displayCarInfo() {
    document.getElementById("carInfo").innerHTML =
        "Car: " + myCar.make + " " + myCar.model + ", " +
        myCar.year + ", Color: " + myCar.color;
}