const result = document.querySelector(".result");
const score = document.querySelector(".score");
const win = document.querySelector(".win");


//Create a function with no parameters named getHumanChoice that gets user choice
function getHumanChoice() {
    //Display question of choice, Rock, Paper or Scissers make case insensitive
    let choice = prompt('Give your choice, Rock, Paper or Scissors');
    //return choice
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
};
    
//Create a function with no parameters named getComputerChoice that gets computer choice
function getComputerChoice() {
    //random choice of Rock, Paper or Scissor
    let random = Math.floor((Math.random() * 3) + 1);
    let choice
    //return choice
    if (random == 1) {
        return 'Rock';
    } 
    else if (random == 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
};

//Create variable with name humanScore white initial value of 0 of type number
let humanScore = 0;
//Create variable with name computerScore white initial value of 0 of type number
let computerScore = 0;
//Create a function named playRound with the parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    //Check who won and console.log You lose! Paper beats Rock!
    //increment humanScore or computerScore based on the round winner
    if (humanChoice == computerChoice) {
        result.textContent = `There's no winner! ${humanChoice} is ${computerChoice}`;
    } 
    else if (humanChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            result.textContent = `You lose! ${humanChoice} loses from ${computerChoice}`;
            computerScore++;
        }
    }
    else if (humanChoice == 'Paper') {
        if (computerChoice == 'Rock') {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            result.textContent = `You lose! ${humanChoice} loses from ${computerChoice}`;
            computerScore++;
        }
    }
    else if (humanChoice == 'Scissors') {
        if (computerChoice == 'Paper') {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            result.textContent = `You lose! ${humanChoice} loses from ${computerChoice}`;
            computerScore++;
        }
    }
    score.textContent = `Score is Human: ${humanScore} - Computer: ${computerScore}`;
    if (humanScore == 5) {
        win.textContent = "Human wins!";
    }
    if (computerScore == 5) {
        win.textContent = "Computer wins!";
    }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});




//Create function PlayGame named playGame with no parameters
/* function playGame() {
    //Play five rounds
    for (let i=0; i < 5; i++) {
        //Put choice in variable humanSelection
        let humanSelection = getHumanChoice();
        //put choice in variable computerSelection
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    };
    if (humanScore > computerScore){
        console.log(`You are the winner with You: ${humanScore} - Computer: ${computerScore}`);
    } else if (humanScore < computerScore){
        console.log(`The computer wins with You: ${humanScore} - Computer: ${computerScore}`);
    } else {
        console.log(`There is no winner: ${humanScore} - Computer: ${computerScore}`);
    }
}
 
playGame(); */