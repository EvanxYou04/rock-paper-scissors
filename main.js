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

const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click' , () => {
        const round = playRound(button.className, getComputerChoice());
        switch (round) {
            case 1:
                result.textContent = "You Win.";
                break;
            case -1:
                result.textContent = "Computer Wins.";
                break;
            case 0:
                result.textContent =  "Tie.";
                break;            
            default:
                "Error Occured."
                break;
        };
    });
});

//console.log(playRound(getPlayerChoice(), getComputerChoice()));