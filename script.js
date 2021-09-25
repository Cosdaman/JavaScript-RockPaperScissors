var win = 0,
    lose = 0,
    tie = 0,
    newLine = "\r\n";

function challenged() {
    alert("You have been challenged to Rock, Paper, Scissors by the website!");
    var possibleMoves = ["R", "P", "S"];
    var userChoice = prompt("Choose your move! R - Rock | P - Paper | S - Scissors", "R, P, or S");
    var computerChoice = possibleMoves[randomChoice(possibleMoves)];
    alert("The computer chose " + computerChoice);
    userChoice = userChoice.toUpperCase();

    if (userChoice == computerChoice) {
        alert("tie");
        tie++;
    } else if
        ((userChoice == "R" && computerChoice == "S") ||
        (userChoice == "P" && computerChoice == "R") ||
        (userChoice == "S" && computerChoice == "P")) {
        alert("win")
        win++;
    } else {
        alert("loss")
        lose++;
    }
    alert("Stats:" + newLine 
    + "Win: " + win + newLine
    + "Loss: " + lose + newLine
    + "Tie: " + tie + newLine)

    if (confirm("Do you want to play again?")) {
        challenged();
    }
}

function randomChoice(x) {
    return Math.floor(Math.random() * x.length);
}