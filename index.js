// problem - 1

// discription = here is  i show a mathmatical problem where i use a Number for multiplication , plush , divided , minus and show the totalEquation .

let myNumder = 50;
function mindGame() {
  let multiplication = myNumder * 3;
  let plush = multiplication + 10;
  let divided = plush / 2;
  let minus = divided - 5;
  let totalEquation = minus;
  if (typeof myNumder !== "number") {
    return 'please enter a valid number';
  }
  return totalEquation;
}
let firstFinalResult = mindGame(myNumder)
// console.log(firstFinalResult)




// problem - 2

// discription = here is i show a even odd Conditional whith string 

let myName = 'jinnat';
function evenOdd() {
  if (typeof myName !== 'string') {
    return ('please inter a valid value')
  }
  if (myName.length % 2 == 0) {
    return ("even");
  }

  else {
    return ("odd");
  }

}
let secoendFinalResult = evenOdd(myName)
// console.log(secoendFinalResult)



// problem - 3

// discription = here is i can show a mathmatical problem where i use 7 as a minus Number also use a condition .

let myConditionalNumder = 40;
let myLessOrGreaterThanResult = myConditionalNumder - 7;
function isLGSeven() {
  if (typeof myConditionalNumder !== "number") {
    return 'please enter a valid number';
  }
  if (myLessOrGreaterThanResult <= 7) {
    return myLessOrGreaterThanResult;
  }
  return myLessOrGreaterThanResult * 2;
}
let thirdFinalResult = isLGSeven(myLessOrGreaterThanResult);
// console.log(thirdFinalResult);



// problem - 4

// discription = here we find a Number of minus . if the number is plush , the funciton will show us enmtpty .

function findingBadData(array) {

  let negatives = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof myNumder !== "number") {
      return 'please enter a valid number';
    }
    if (array[i] < 0) {
      negatives.push(array[i]);
    }
  }

  return negatives;

}
let badData = [-4, -5, 0, 2, 67, 8, 10, 34];
// console.log(findingBadData(badData));



// problem - 5

// discription = here we include theree friend gems and convert it to a dimonend .

function gemsToDiamond(firstFriendHaveGems, secoendFriendHaveGems, thirdFriendHGems) {
  let firstFriendGotDiamond = firstFriendHaveGems * 21;
  let secoendFriendGotDiamond = secoendFriendHaveGems * 32;
  let thirdFriendGotDiamond = thirdFriendHGems * 43;

  let toghethereFriedGotDiamnd = firstFriendGotDiamond + secoendFriendGotDiamond + thirdFriendGotDiamond;
  if (typeof firstFriendHaveGems !== "number" || typeof secoendFriendHaveGems !== "number" || typeof thirdFriendHGems !== "number") {
    return 'please enter a valid number';
  }



  return toghethereFriedGotDiamnd;
}
let fifthFinalResult = gemsToDiamond(5, 10, 15);
// console.log(fifthFinalResult);