const choices = ["Rock" , "Paper" , "Scissors"];

function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;   
}

function getComputerChoice() {
    return choices[randInt(0 , choices.length)];
}

// console.log(getComputerChoice())