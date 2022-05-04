let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, compGuess, targetNum) => {
  let userDiff;
  let compDiff;
  let outcome;

  //user result:
  if (userGuess >= targetNum) {
    userDiff = userGuess - targetNum;
  } else {
    userDiff = targetNum - userGuess;
  }

  //computer result:
  if (compGuess >= targetNum) {
    compDiff = compGuess - targetNum;
  } else {
    compDiff = targetNum - compGuess;
  }

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

const getAbsoluteDistance = (userGuess, compGuess, targetNum) => {
  let userDiff = Math.abs(userGuess - targetNum);
  let compDiff = Math.abs(compGuess - targetNum);
  console.log(`User diff = ${userDiff}`);
  console.log(`Comp diff = ${compDiff}`);
};
