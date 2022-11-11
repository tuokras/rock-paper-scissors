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
    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    if (!(playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors")) {
        return "Invalid entry";
    }

    if (playerSelection === computerSelection) {
        return "Draw!";
    }

    let playerWins = checkPlayerWin(playerSelection, computerSelection)

    if (playerWins) {
        return ("You win! " + playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection);
    } else {
        return ("You lose! " + computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection);
    }
}


function game() {
    let playerSelection;
    let computerSelection;
    let round = 0;

    for (let i = 0; i < 5; i++) {
        round++;
        console.log("Round " + round)
        playerSelection = prompt("Enter your choice");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();


