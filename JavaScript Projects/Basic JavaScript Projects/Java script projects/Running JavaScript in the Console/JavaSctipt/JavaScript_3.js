// Function to display bridge information
function showBridgeInfo(bridge) {
    // Get data attributes from the clicked bridge
    const year = bridge.getAttribute("data-year");
    const type = bridge.getAttribute("data-type");
    const location = bridge.getAttribute("data-location");

    // message with bridge details
    const message = `${bridge.innerHTML} is a ${type} bridge built in ${year}, located in ${location}.`;

    document.getElementById("output").textContent = message;
}
