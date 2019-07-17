
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";


function computerPlay() {
    let generatedNumber = Math.floor(Math.random()*3);
    if (generatedNumber == 0) {
        console.log("Computer generated: ROCK");
        return "rock";
    }
    else if (generatedNumber == 1) {
        console.log("Computer generated: PAPER");
        return "paper";
    }
    else if (generatedNumber == 2) {
        console.log("Computer generated: SCISSORS");
        return "scissors";
    }
}

rock.onclick = function() {
    console.log("Player chose: ROCK");
    playerSelection = "rock";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

paper.onclick = function() {
    console.log("Player chose: PAPER");
    playerSelection = "paper";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

scissors.onclick = function() {
    console.log("Player chose: SCISSORS");
    playerSelection = "scissors";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection !== "") {

        if ((playerSelection === "rock" && computerSelection === "scissors") ||
         (playerSelection === "paper" && computerSelection === "rock") ||
         (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            playerScore++;
            alert("You won! Congratulations " + playerScore + " : " + computerScore);
        }
        else if (playerSelection === computerSelection) 
        {
            alert("It's a draw! Try again " + playerScore + " : " + computerScore);
        }
        else 
        {
            computerScore++;
            alert("Computer won! " + playerScore + " : " + computerScore);
        }
    }
}