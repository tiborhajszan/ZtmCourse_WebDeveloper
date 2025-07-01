//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Advanced JavaScript | Advanced Conditionals Exercise
//######################################################################################################################

// #1 ##################################################################################################################
// Convert the next function into a ternary operator and assign the outcome to the "experiencePoints" variable!

function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  };
};

// Solution:

let experiencePoints = winBattle() ? 10 : 1;

// #2 ##################################################################################################################
// Based on the next function, answer the following questions!

function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "You encounter a monster.";
    case "back":
      whatHappens = "You arrive at home.";
      break;
      break;
    case "right":
      return whatHappens = "You find a river.";
      break;
    case "left":
      break;
      whatHappens = "You run into a troll.";
      break;
    default:
      whatHappens = "Please enter a valid direction!";
  };
  return whatHappens;
};
console.log(moveCommand("forward"));
console.log(moveCommand("back"));
console.log(moveCommand("right"));
console.log(moveCommand("left"));
console.log(moveCommand("hello"));

// #2a -----------------------------------------------------------------------------------------------------------------
// What is the return value of moveCommand("forward")?

// Answer: undefined

// #2b -----------------------------------------------------------------------------------------------------------------
// What is the return value of moveCommand("back")?

// Aswer: "You arrive at home."

// #2c -----------------------------------------------------------------------------------------------------------------
// What is the return value of moveCommand("right")?

// Aswer: "You find a river."

// #2d -----------------------------------------------------------------------------------------------------------------
// What is the return value of moveCommand("left")?

// Aswer: undefined

// BONUS ###############################################################################################################
// Practice makes perfect: Write your own switch function!

// Solution:

function greetings(partOfDay) {
  let greeting;
  switch (partOfDay) {
    case "am":
      greeting = "Good morning!";
      break;
    case "pm":
      greeting = "Good afternoon!";
      break;
    case "night":
      greeting = "Good night!";
      break;
    default:
      greeting = "Howdy!";
  };
  return greeting;
};
console.log(greetings("am"));
console.log(greetings("pm"));
console.log(greetings("night"));
console.log(greetings("hello"));
