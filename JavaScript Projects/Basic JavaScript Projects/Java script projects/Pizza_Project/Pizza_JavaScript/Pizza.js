// Function to get the receipt
function getReceipt() {
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");

    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            let selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";

            if (selectedSize === "Personal Pizza") {
                sizeTotal = 6;
            } else if (selectedSize === "Small Pizza") {
                sizeTotal = 8;
            } else if (selectedSize === "Medium Pizza") {
                sizeTotal = 10;
            } else if (selectedSize === "Large Pizza") {
                sizeTotal = 14;
            } else if (selectedSize === "Extra Large Pizza") {
                sizeTotal = 16;
            }
        }
    }

    runningTotal = sizeTotal;
    getTopping(runningTotal, text1);
}

// Function to get selected toppings
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("toppings");

    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            text1 += toppingArray[j].value + "<br>";
        }
    }

    let toppingCount = selectedTopping.length;

    // First topping is free
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }

    runningTotal += toppingTotal;

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
