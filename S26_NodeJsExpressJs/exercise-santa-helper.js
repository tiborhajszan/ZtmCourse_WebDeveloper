// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Back End | Servers | Santa's Node Helper
// #####################################################################################################################

const fileSystem = require("fs");
let directionString = "";
let floorNumber = 0;
let moveCounter = 0;
let firstBasement = 0;

// solution ############################################################################################################

// reading input file --------------------------------------------------------------------------------------------------

directionString = fileSystem.readFileSync("./exercise-santa-directions.txt", "utf-8");

// starting timer ------------------------------------------------------------------------------------------------------

console.time("Santa");

// counting moves ------------------------------------------------------------------------------------------------------

for (let char of directionString) {
  if (char === "(") {floorNumber++}
  else if (char === ")") {floorNumber--}
  else {console.log("Ooops, there is a glitch in the instructions!")};
  moveCounter++;
  if (firstBasement === 0 && floorNumber < 0) {firstBasement = moveCounter};
};

// halting timer -------------------------------------------------------------------------------------------------------

console.log();
console.timeEnd("Santa");

// displaying answers --------------------------------------------------------------------------------------------------

console.log(`Santa's final position: floor #${floorNumber}.`);
console.log(`Santa first entered basement: move #${firstBasement}.\n`);
