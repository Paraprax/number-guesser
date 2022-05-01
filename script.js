let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userNum, compNum, targetNum) => {
  let userDiff;
  let compDiff;
  let outcome;

  //user result:
  if (userNum >= targetNum) {
    userDiff = userNum - targetNum;
  } else if (targetNum > userNum) {
    userDiff = targetNum - userNum;
  }

  //computer result:
  if (compNum >= targetNum) {
    compDiff = compNum - targetNum;
  } else if (targetNum > compNum) {
    compDiff = targetNum - compNum;
  }

  //calculate outcome:
  if (userDiff <= compDiff) {
    outcome = true;
  } else {
    outcome = false;
  }

  return outcome;
};

console.log(compareGuesses(7, 5, 8));
