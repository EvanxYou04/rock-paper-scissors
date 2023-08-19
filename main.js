const choices = ["rock" , "paper" , "scissors"];

function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;   
}

function getComputerChoice() {
    return choices[randInt(0 , choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // rock beats scissors
    // scissors beats paper
    // paper beats scissor
    if (playerSelection == computerSelection)
    {
        console.log("tie");
        return 0;
    }
    else if (playerSelection == "rock" && computerSelection == "paper" ) {
        console.log("computer wins!");
        return -1;
    }
    else if (computerSelection == "rock" && playerSelection == "paper" ) {
        console.log("player wins!");
        return 1;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper" ) {
        console.log("computer wins!");
        return -1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper" ) {
        console.log("player wins!");
        return 1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ) {
        console.log("player wins!");
        return 1;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" ) {
        console.log("computer wins!");
        return -1;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Select your choice (Rock,Paper,Scissors): ");
    switch (playerChoice.toLowerCase()) {
        case "rock":
            playerChoice = choices[0];
            break;

        case "paper":
            playerChoice = choices[1];
            break;

        case "scissors":
            playerChoice = choices[2];
            break;
        default:
            console.log("incorrect input. try again")
            getPlayerChoice();
            break;
    }
    return playerChoice;
}   


console.log(playRound(getPlayerChoice(), getComputerChoice()));