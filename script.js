function getComputerChoice() {
    value = Math.random() * 3;
    console.log(value);
    if (value <= 1) {
        return "Rock";
    } else if (value > 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    let playerWins = false;

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else {

        switch (computerSelection) {
            case "rock":

                if (playerSelection === "paper") {
                    playerWins = true;
                }

                break;

            case "paper":

                if (playerSelection === "scissors") {
                    playerWins = true;
                }

                break;

            case "scissors":

                if (playerSelection === "rock") {
                    playerWins = true;
                }

                break;

        }

        if (playerWins) {
            return ("You win! " + playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection);
        } else {
            return ("You lose! " + computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection);
        }
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


