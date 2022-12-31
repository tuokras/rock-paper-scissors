function getComputerChoice() {
    value = Math.random() * 3;
    //console.log(value);
    if (value <= 1) {
        return "Rock";
    } else if (value > 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function checkPlayerWin(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "rock":

            if (playerSelection === "paper") {
                return true;
            }

            break;

        case "paper":

            if (playerSelection === "scissors") {
                return true;
            }

            break;

        case "scissors":

            if (playerSelection === "rock") {
                return true;
            }

            break;

        default:
            return false;

    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    document.querySelector("#player").textContent = "Player selection: " + playerSelection;
    document.querySelector("#computer").textContent = "Computer selection: " + computerSelection;

    if (playerSelection === computerSelection) {
        document.querySelector("#output").textContent = "Draw!";
        return 2;
    }

    let playerWins = checkPlayerWin(playerSelection, computerSelection)
    if (playerWins) {
        document.querySelector("#output").textContent = ("You win! " + playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection);
        return 1;
    } else {
        document.querySelector("#output").textContent = ("You lose! " + computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection);
        return 0;
    }
}


function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5) {
                playerSelection = button.id;
                computerSelection = getComputerChoice();

                switch (playRound(playerSelection, computerSelection)) {
                    case 2:
                        break;

                    case 1:
                        playerScore++;
                        break;

                    case 0:
                        computerScore++;
                        break;
                }

                console.log(playerScore);
                document.querySelector("#score").textContent = "Player score: " + playerScore;

                if (playerScore === 5) {
                    if (playerScore < computerScore) {
                        document.querySelector("#winner").textContent = "Winner: computer";
                    } else {
                        document.querySelector("#winner").textContent = "Winner: player";
                    }
                }
            }
        });
    });
}

game();

