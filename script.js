let playerWon = 0;
let computerWon = 0;
let roundCount = 0;

const choices = document.querySelectorAll('.choice');
choices.forEach(button => button.addEventListener('click', playRound));

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseenter', () => button.style.backgroundColor = '#c884a6'));
buttons.forEach(button => button.addEventListener('mouseleave', () => button.style.backgroundColor = 'rgb(224, 122, 95)'));

const replayButton = document.getElementById('replay-button');
replayButton.addEventListener('click', resetGame);

const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click', () => switchDisplay(true));

function playRound(e) {
    const playerChoice = e.target.value;
    const computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);
    const roundResult = getRoundResult(playerChoice, computerChoice);
    displayRoundResult(roundResult);
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
    const computerCard = document.getElementById('computer-card');
    const playerCard = document.getElementById('player-card');
    computerCard.textContent = getEmoji(computerChoice);
    playerCard.textContent = getEmoji(playerChoice);
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
    const roundDiv = document.getElementById('round-result');
    roundDiv.textContent = roundResult;
    updateScore();
    roundCount++;
    if(roundCount < 5) {
        return;
    }
    disableChoices();
}

function disableChoices() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.style.display = 'none';
    const continueButton = document.getElementById('continue-button');
    continueButton.style.display = 'block';
    const gameDiv = document.getElementById('game-result');
    if(playerWon > computerWon) {
        gameDiv.textContent = "You won!";
    } else if(playerWon < computerWon) {
        gameDiv.textContent = "You lost!";
    } else {
        gameDiv.textContent = "It's a draw!";
    }
}

function updateScore() {
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    playerScore.textContent = playerWon;
    computerScore.textContent = computerWon;
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

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getEmoji(str) {
    switch(str) {
        case 'rock':
            return '🪨';
            break;
        case 'paper':
            return '🧻';
            break;
        case 'scissors':
            return '✂️';
            break;
        default:
            return '❓';
    }
}

function resetGame() {
    roundCount = 0;
    playerWon = 0;
    computerWon = 0;
    updateScore();
    switchDisplay(false);
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.textContent = '❓');
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.style.display = 'flex';
    const continueButton = document.getElementById('continue-button');
    continueButton.style.display = 'none';
    const gameDiv = document.getElementById('game-result');
}

function switchDisplay(gameOver) {
    const container = document.getElementById('container');
    const replayContainer = document.getElementById('replay-container');
    if(gameOver) {
        container.style.display = 'none';
        replayContainer.style.display = 'flex';
    } else {
        container.style.display = 'flex';
        replayContainer.style.display = 'none';
        const div = document.getElementById('round-result');
        div.textContent = "";
    }
}