function checkVote() {
    let age = document.getElementById("ageInput").value;
    let message = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";
    document.getElementById("result").innerHTML = message;
}