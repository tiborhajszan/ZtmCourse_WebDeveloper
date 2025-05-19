// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Node.js & Express.js | Exercise: Top Level Await in Node.js
// #####################################################################################################################

// Run this code in your Terminal using Node!

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
