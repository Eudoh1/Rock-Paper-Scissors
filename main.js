function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
  function getHumanChoice() {
  const userInput = prompt("Enter your choice: Rock, Paper, or Scissors");
  return userInput;
}

// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;
