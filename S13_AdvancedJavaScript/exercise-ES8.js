
// Exercise: ES8

// #1 Line up the Turtle and the Rabbit at the start line!

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";
// It should look like this:
"     ||<- Start line"
"       🐢"
"       🐇"
// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// --- Solution:

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// #2 What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable?
// Read about what the second parameter does in padEnd() and padStart()!

turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);

// --- Answer: It adds equal signs to the end of the string to make it 9 characters long.

// #3 Convert the object below:
const obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer"
}
// to a string:
"my name is Rudolf the raindeer"

// --- Solution:

const objString = Object.entries(obj).map(entry => entry.join(" ")).join(" ");
console.log(objString);
