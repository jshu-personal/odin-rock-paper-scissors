function getComputerChoice(){
    // Randomly chooses rock/paper/scissors
    let randNum = Math.random();
    if (randNum <= 1/3) {
        return "Rock"
    } else if (randNum <= 2/3 ){
        return "Paper"
    } else {
        return "Scissors"
    }
}

let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
})

const msgDiv = document.querySelector("#compMsgDiv");
const humanChoiceText = document.createElement("p");
const compChoiceText = document.createElement("p");
const roundResult = document.createElement("p");
msgDiv.append(humanChoiceText, compChoiceText, roundResult);

const winLossDiv = document.querySelector("#winLoss");
const computerWins = document.createElement("p");
const humanWins = document.createElement("p");
humanWins.textContent = "Human wins: 0";
computerWins.textContent = "Computer wins: 0";
winLossDiv.append(humanWins, computerWins);

const finalResult = document.querySelector("#finalResult");

function playRound(){
    if (computerScore === 5 || humanScore === 5) {
        return
    }
    let humanChoice = this.textContent;
    humanChoiceText.textContent = `You chose: ${humanChoice}`;
    let computerChoice = getComputerChoice();
    compChoiceText.textContent = `Computer chose: ${computerChoice}`;
    winner = decideWinner(humanChoice, computerChoice);
    if (winner === 'human') {
        roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
        humanWins.textContent = `Human wins: ${humanScore}`
    }
    else if (winner === 'comp') {
        roundResult.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        computerWins.textContent = `Computer wins: ${computerScore}`
    }
    else {
        roundResult.textContent = `You tied.`
    }
    if (computerScore === 5 || humanScore === 5) {
        finalResult.textContent = `Game over: ${humanScore === 5 ? 'you won!' : 'computer won :('}`
    }
}

function decideWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie'
    } else if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            return 'human'
        } else {
            return 'comp'
        } 
    } else if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            return 'human'
        } else {
            return 'comp'
        } 
    } else {
        if (computerChoice === 'Paper') {
            return 'human'
        } else {
            return 'comp'
        } 
    }
}