let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Countdown Timer */
function countdown() {
    let seconds = document.getElementById("seconds").value;
    const timer = document.getElementById("timer");

    if (seconds <= 0 || isNaN(seconds)) {
        alert("Please enter a positive number.");
        return;
    }

    function tick() {
        if (seconds > 0) {
            timer.innerHTML = seconds;
            seconds = seconds - 1;
            setTimeout(tick, 1000);
        } else {
            timer.innerHTML = "0";
            alert("Time's up! Slide changed.");
            plusSlides(1); // Move to next slide
        }
    }

    tick();
}
