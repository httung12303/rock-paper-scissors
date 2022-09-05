let playerWon = 0;
let computerWon = 0;
let roundCount = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

function playRound(e) {
    const playerChoice = e.target.value;
    const computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);
    const roundResult = getRoundResult(playerChoice, computerChoice);
    displayRoundResult(roundResult);
    displayGameResut();
}

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        default:
            return 'paper';
    }
}

function getRoundResult(playerChoice, computerChoice) {
    const playerChoiceNum = choiceInNumber(playerChoice);
    const computerChoiceNum = choiceInNumber(computerChoice);
    if(playerChoiceNum === computerChoiceNum) {
        return "It's a draw!";
    }
    else if(playerChoiceNum === computerChoiceNum - 1 || playerChoiceNum === computerChoiceNum + 2) {
        playerWon++;
        return `You won! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}!`; 
    }
    else {
        computerWon++;
        return `You lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}!`; 
    }
}

function displayRoundResult(roundResult) {
    const div = document.getElementById('round-result');
    div.textContent = roundResult;
}

function getPlayerChoice() {
    return prompt('What will you choose?');
}

function choiceInNumber(choice) {
    switch (choice) {
        case 'rock':
            return 0;
            break;
        case 'scissors':
            return 1;
            break;
        case 'paper':
            return 2;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayGameResut() {
    roundCount++;
    if(roundCount < 5) {
        return;
    }
    const div = document.getElementById('game-result');
    if(playerWon > computerWon) {
        div.textContent = "You won!";
    } else if(playerWon < computerWon) {
        div.textContent = "You lost!";
    } else {
        div.textContent = "It's a draw!";
    }
    roundCount = 0;
    playerWon = 0;
    computerWon = 0;
}