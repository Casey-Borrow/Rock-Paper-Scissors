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
            playerWin();     
        }
        else if (playerSelection === "scissors") {
            computerWin();
        }
        else {
            console.log("Draw");
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
            console.log("Draw");
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
            console.log("Draw")
        }
    }
}

let computerScore = 0
let playerScore = 0

function playerWin() {
    console.log ("Player wins the round");
    playerScore += 1;
    currentScore(playerScore, computerScore);
}

function computerWin() {
    console.log ("Computer wins the round");
    computerScore += 1;
    currentScore(playerScore, computerScore);
}

function currentScore(playerScore, computerScore) {
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = "rock"
        const computerSelection = computerPlay();
    }
}