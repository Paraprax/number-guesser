let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (a, b) => {
  const distance = Math.abs(a - b);
  return distance;
};

const compareGuesses = (userGuess, compGuess, targetNum) => {
  if (userGuess >= 10) {
    alert("Invalid guess!");
    return;
  }
  let outcome;

  //user result:
  let userDiff = getAbsoluteDistance(userGuess, targetNum);

  //computer result:
  let compDiff = getAbsoluteDistance(compGuess, targetNum);

  //calculate outcome:
  if (userDiff <= compDiff) {
    outcome = true;
  } else {
    outcome = false;
  }

  return outcome;
};

const updateScore = (winner) => {
  if (winner == "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
