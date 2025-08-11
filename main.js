function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Human choice from button clicks
  function getHumanChoice(choice) {
  return choice; // This will be set by button click event listeners
  }

// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Play one round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Update UI with the current score and result
function updateUI(message) {
    document.getElementById('result').textContent = message;
    document.getElementById('score').textContent = `You: ${humanScore} | Computer: ${computerScore}`;

if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? 'You win the game' : 'Computer wins the game';
    document.getElementById('result').textContent = winner;
    disableButtons(); 
}
    }

    // Disable buttons after the game ends
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event listeners for button clicks
document.getElementById('rock').addEventListener("click", () => {
    const result = playRound(getHumanChoice('Rock'), getComputerChoice());
    updateUI(result);
});
document.getElementById('paper').addEventListener("click", () => {
    const result = playRound(getHumanChoice('Paper'), getComputerChoice());
    updateUI(result);
});
document.getElementById('scissors').addEventListener("click", () => {
    const result = playRound(getHumanChoice('Scissors'), getComputerChoice());
    updateUI(result);
});

     