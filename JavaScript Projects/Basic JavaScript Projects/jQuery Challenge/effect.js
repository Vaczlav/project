// Run code when page is fully loaded
$(document).ready(function () {

    // When user clicks the button
    $("#effect-btn").click(function () {

        // Slide the box up/down
        $("#effect-box").slideToggle("slow", function () {

            // Log message after animation ends
            console.log("Slide effect completed.");
        });
    });
});
