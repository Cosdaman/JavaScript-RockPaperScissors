var win = 0,
    lose = 0,
    tie = 0,
    newLine = "\r\n";

function challenged() {
    alert("You have been challenged to Rock, Paper, Scissors by the website!");
    game();
}

function game() {
    var possibleMoves = ["R", "P", "S"];
    var userChoice = prompt("Choose your move! R - Rock | P - Paper | S - Scissors." + newLine
        + "Invalid entries will default to a loss.", "R, P, or S");
    userChoice = userChoice.toUpperCase();
    var computerChoice = possibleMoves[randomChoice(possibleMoves)];
    alert("The computer chose " + computerChoice);

    if (userChoice == computerChoice) {
        alert("Tie!");
        tie++;
    } else if
        ((userChoice == "R" && computerChoice == "S") ||
        (userChoice == "P" && computerChoice == "R") ||
        (userChoice == "S" && computerChoice == "P")) {
        alert("You won!")
        win++;
    } else {
        alert("You lost!")
        lose++;
    }
    alert("Stats:" + newLine
        + "Win: " + win + newLine
        + "Loss: " + lose + newLine
        + "Tie: " + tie + newLine)

    if (confirm("Do you want to play again?")) {
        game();
    }
}

function randomChoice(x) {
    return Math.floor(Math.random() * x.length);
}