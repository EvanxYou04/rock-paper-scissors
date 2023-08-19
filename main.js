const choices = ["Rock" , "Paper" , "Scissors"];

function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;   
}

function getComputerChoice() {
    return choices[randInt(0 , choices.length - 1)];
}

function playRound(playerSelection, computerSelection) {
    // rock beats scissors
    // scissors beats paper
    // paper beats scissor
    if (playerSelection == computerSelection )
    {
        console.log("tie");
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper" ) {
        console.log("computer wins!")
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper" ) {
        console.log("player wins!")
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper" ) {
        console.log("computer wins!")
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper" ) {
        console.log("player wins!")
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ) {
        console.log("player wins!")
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors" ) {
        console.log("computer wins!")
    }
}

// console.log(getComputerChoice())