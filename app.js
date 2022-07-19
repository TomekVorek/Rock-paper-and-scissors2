let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor((Math.random() * 3)));
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = user + ' beats ' + computer + ', You win! ';
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow')
    }, 1000);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = computer + ' beats ' + user + ', You lose! ';
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('red-glow')
    }, 1000);

}

function draw(user, computer) {
    result_div.innerHTML = computer + ' is equal to ' + user + ', It is a draw! ';
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('gray-glow')
    }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
    /*if (userChoice === computerChoice) {
        console.log('remis')
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose')
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You won')
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lost')
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('You won')
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lost')
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You won')
    }*/
}


function main() {
    rock_div.addEventListener('click', function() {
        game('rock')
    });
    paper_div.addEventListener('click', function() {
        game('paper')
    });
    scissors_div.addEventListener('click', function() {
        game('scissors')
    });
}

main();
getComputerChoice();