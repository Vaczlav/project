//  different types of bridges dictionary

const bridgeDictionary = {
    "arch": "A bridge that uses an arch as the main supporting structure for the roadway. These bridges are used in areas with large spans and deep rivers.",
    "suspended": "A bridge where the main portion of the structure is suspended by cables or ropes. Typically used for long distances where other types of bridges are not feasible.",
    "suspended": "A type of bridge typically used for long distances where other types of bridges are not feasible.",  // duplicate key
    "cable-stayed": "A bridge where vertical cables transfer the load to the main supports that hold up the roadway.",
    "beam": "A type of bridge where the roadway is supported by horizontal beams placed on supports at both ends.",
    "high-rise": "A bridge with a significant height above the river or road to allow large ships to pass underneath.",
};

// displaying the selected bridge type
function showBridge() {
    const key = "suspended"; // Choosing type to test
    const definition = bridgeDictionary[key];

    // Display the  the element 
    document.getElementById("Dictionary").innerHTML = `<strong style="color:red;">${key}</strong>: ${definition}`;
}

console.log("Before delete:", bridgeDictionary["suspended"]);
delete bridgeDictionary["suspended"];
console.log("After delete:", bridgeDictionary["suspended"]);
console.log("Updated dictionary:", bridgeDictionary);
