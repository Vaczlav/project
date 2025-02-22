// This variable keeps track of whose turn it is.
let activePlayer = 'X';

// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// Function for placing an X or O in a square.
function placeXOrO(squareNumber) {
    // Ensure a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // Get the HTML element that was clicked
        let select = document.getElementById(squareNumber);

        // Check whose turn it is
        if (activePlayer === 'X') {
            // Place X in the square
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            // Place O in the square
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Add square and player to the array
        selectedSquares.push(squareNumber + activePlayer);

        // Check for any win conditions
        checkWinConditions();

        // Switch turns
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';

        // Play placement sound
        audio('./media/place.mp3');

        // Check if it's the computer's turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }

        return true;
    }
}

// Function for the computer's turn
function computersTurn() {
    let success = false;
    let pickASquare;

    // Loop until a valid square is chosen
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));

        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}
// This function parses the selectedSquares array to search for win conditions.
// drawWinLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    // X 6, 4, 2 diagonal condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 diagonal condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }

    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 diagonal condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    // O 0, 4, 8 diagonal condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }

    // This condition checks for a tie. If none of the above conditions are met and 9 squares are selected.
    else if (selectedSquares.length >= 9) {
        // Play the tie game sound
        audio('./media/tie.mp3');
        // Reset the game after a short delay
        setTimeout(function () { resetGame(); }, 500);
    }
}

// This function checks if an array includes 3 strings. It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // Check if selectedSquares contains the winning combination
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    // If all three are true, return true (a win is detected)
    if (a === true && b === true && c === true) { return true; }
}

// This function makes our body element temporarily unclickable.
function disableClick() {
    // This makes our body unclickable.
    document.body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

// This function takes a string parameter of the path you set earlier for placement sound.
function audio(audioURL) {
    // We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
    //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
    //This line indicates where the end of a lines y axis is.
        y2 = coordY2,
    //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
    //This variable stores temporary y axis data we update in our animation loop.
        y = y1;

    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path.
        c.beginPath();
        //This method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //This method draws everything we laid out above.
        c.stroke();

        //This condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; } //This condition adds 10 to the previous end x endpoint.
            if (y < y2) { y += 10; } //This condition adds 10 to the previous end y endpoint.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //Stops animation when the end point is reached.
        }

        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }

    //This line disallows clicking while the win sound is playing.
    disableClick();
    //This line plays the win sounds.
    audio('./media/winGame.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}


//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our element's backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
