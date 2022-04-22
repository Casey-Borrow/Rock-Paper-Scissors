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

function playerPlay() {
    let validSelection = false;
    while (!validSelection) {
        let playerSelection = String(prompt("Choose: Rock, Paper or Scissors?"));
        if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
            return playerSelection;
        }
    }
}

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
            playerWin();     
        }
        else if (playerSelection === "scissors") {
            computerWin();
        }
        else {
            draw();
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerWin();
        }
        else if (playerSelection === "scissors") {
            playerWin();
        }
        else {
            draw();
        }
    }

    else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerWin();
        }
        else if (playerSelection === "paper") {
            computerWin();
        }
        else {
            draw();
        }
    }
}

let computerScore = 0
let playerScore = 0

function playerWin() {
    winner.textContent = "Player wins the round";
    playerScore += 1;
    player.textContent = `Player: ${playerScore}`;
}

function computerWin() {
    winner.textContent = "Computer wins the round";
    computerScore += 1;
    computerSelect.textContent = `Computer: ${computerScore}`;
}

function draw() {
    if (winner.textContent === "Draw") {
        winner.textContent = "Draw Again"
    }
    else {
        winner.textContent = "Draw"
    }
}

window.addEventListener("click", function(e) {
    const playerSelection = e.srcElement.id;
    playRound(playerSelection, computerPlay());
})

let computerSelect = document.getElementById("computer");
let player = document.getElementById("player");
let winner = document.getElementById("winner");
