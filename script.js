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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (rock/paper/scissors):");
    return humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()
}

let humanScore = 0, computerScore = 0;

function winLossMsg(humanWon, winner, loser) {
    let beatsMsg = winner + " beats " + loser
    humanWon ? console.log("You won! " + beatsMsg) : console.log("You lost! " + beatsMsg);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You tie! " + humanChoice + " and " + computerChoice + " are the same.")
    } else if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            winLossMsg(true, humanChoice, computerChoice);
            humanScore += 1;
        } else {
            winLossMsg(false, computerChoice, humanChoice)
            computerScore += 1;
        } 
    } else if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            winLossMsg(true, humanChoice, computerChoice);
            humanScore += 1;
        } else {
            winLossMsg(false, computerChoice, humanChoice)
            computerScore += 1;
        } 
    } else {
        if (computerChoice === 'Paper') {
            winLossMsg(true, humanChoice, computerChoice);
            humanScore += 1;
        } else {
            winLossMsg(false, computerChoice, humanChoice)
            computerScore += 1;
        } 
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log("Starting round ", i+1);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("You chose: " + humanChoice);
        console.log("The computer chose: " + computerChoice);
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore) {
        console.log("Congrats! You won " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost " + computerScore + " to " + humanScore);
    } else {
        console.log("Wow, you tied " + humanScore + " to " + computerScore);
    }
}

playGame();