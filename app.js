let userScore = 0;  
let computerScore = 0;  

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let userPoints = document.querySelector('#user-score');
let computerPoints = document.querySelector('#computer-score');


const displayScore = () => {
    userPoints.innerText = userScore;
    computerPoints.innerText = computerScore;
}


const resetMsgClasses = () => {
    msg.classList.remove('win', 'lose', 'draw', 'animate');
}

const showWinner = (userWin, userChoice, computerChoice) => {
    resetMsgClasses();
    if(userWin){
        userScore++;
        msg.classList.add('win');
        msg.innerText = `You WIN 😎 !!! Your ${userChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        msg.classList.add('lose');
        msg.innerText = `You LOSE 🥲. ${computerChoice} beats your ${userChoice}`;
    }
    displayScore();
}

const drawGame = () => {
    resetMsgClasses();
    msg.classList.add('draw', 'animate');
    msg.innerText = `IT's A DRAW 🤝 !!!`;
}

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const playGame = (userChoice) => {
    console.log(`user choice => ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`computer choice => ${computerChoice}`);
    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            if(computerChoice === 'paper'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === 'paper'){
            if(computerChoice === 'scissors'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            if(computerChoice === 'rock'){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})