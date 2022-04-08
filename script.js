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

const computerSelection = computerPlay()

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