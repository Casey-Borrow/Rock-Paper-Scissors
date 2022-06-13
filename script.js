// Create computer play
    // Random number between 1-3
    // if number = 1
        // Rock
    //else if number = 2
        // Paper
    // else if num = 3
        // Scissors
    // Stores choice

function computerPlay() {
    computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (computer === 1) {
        return "rock";
    }
    else if (computer === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Ask user for rock, paper or scissorss
    // If user enters anything else reprompt
    // Store player choice in variable


// Compare choices
    // if computer = rock
        // if player = paper
            // player wins
        // else if player = scissors
            // computer wins
        // else draw
    // else if computer = paper
        // if player = rock
            // computer wins
        // else if player = scissors
            // player wins
        // else draw
    // else computer = scissors
        // if player = rock
            // player wins
        // else if player = paper
            // computer wins
        // else draw

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerWin(playerSelection, computerSelection);
        }
        else if (playerSelection === "scissors") {
            computerWin(playerSelection, computerSelection);
        }
        else {
            draw(playerSelection, computerSelection);
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerWin(playerSelection, computerSelection);
        }
        else if (playerSelection === "scissors") {
            playerWin(playerSelection, computerSelection);
        }
        else {
            draw(playerSelection, computerSelection);
        }
    }

    else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerWin(playerSelection, computerSelection);
        }
        else if (playerSelection === "paper") {
            computerWin(playerSelection, computerSelection);
        }
        else {
            draw(playerSelection, computerSelection);
        }
    }

    if (playerScore === 5) {
        let btnsDisable = document.getElementsByClassName.querySelectorAll("button")
            btns[0].setAttribute("disabled", "disabled")
        }
    }


let computerScore = 0
let playerScore = 0

function playerWin(playerSelection, computerSelection) {
    let playerS = capitalize(playerSelection);
    let computerS = capitalize(computerSelection);
    winner.textContent = `${playerS} vs ${computerS}`;
    winner2.textContent = "Player wins the round";
    playerScore += 1;
    player.textContent = `Player: ${playerScore}`;
}

function computerWin(playerSelection, computerSelection) {
    let playerS = capitalize(playerSelection);
    let computerS = capitalize(computerSelection);
    winner.textContent = `${playerS} vs ${computerS}`;
    winner2.textContent = "Computer wins the round";
    computerScore += 1;
    computerSelect.textContent = `Computer: ${computerScore}`;
}

function draw(playerSelection, computerSelection) {
    let playerS = capitalize(playerSelection);
    let computerS = capitalize(computerSelection);
    winner.textContent = `${playerS} vs ${computerS}`;
    winner2.textContent = "Draw";
}

var btns = document.getElementsByClassName("buttons");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        const playerSelection = e.srcElement.id;
        playRound(playerSelection, computerPlay());
    });
}
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

let computerSelect = document.getElementById("computer");
let player = document.getElementById("player");
let winner = document.getElementById("winner");