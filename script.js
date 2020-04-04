let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber
}

function compareGuesses(human, computer, target) {
  const userG = Math.abs(target - human);
  const computerG = Math.abs(target - computer);
  return userG <= computerG;
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
}

function advanceRound() {
  currentRoundNumber += 1;
};
  

