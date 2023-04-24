const computerChoiceElem = document.getElementById("computer-choice");
const userChoiceElem = document.getElementById("user-choice");
const resultElem = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceElem.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "scissors";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  computerChoiceElem.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "you win!";
  }
  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    result = "you lost!";
  }
  resultElem.innerHTML = result;
}
