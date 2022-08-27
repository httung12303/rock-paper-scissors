let playerWon
let computerWon

game();

function game() {
    playerWon = computerWon = 0;
    for(let i = 0; i < 5; i++) {
        alert(playRound(getComputerChoice(), getPlayerChoice()));
    }
    switch(true) {
        case playerWon == computerWon:
            alert("Draw");
            break;
        case playerWon > computerWon:
            alert("You won");
            break;
        default:
            alert("You lost");
    }
}

function playRound(computerChoice, playerChoice) {
    computerChoiceNumber = choiceInNumber(computerChoice.toLowerCase());
    playerChoiceNumber = choiceInNumber(playerChoice.toLowerCase());
    if(playerChoiceNumber === computerChoiceNumber - 1 || playerChoiceNumber === computerChoiceNumber + 2) {
        playerWon++;
        return `You won! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else if(computerChoiceNumber == playerChoiceNumber) {
        return `It's a draw!`;
    } else {
        computerWon++;
        return `You lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }
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