
// Exercise: Advanced Functions

// Create a one-line function that adds two parameters!

const sum = a => b => a + b;

// Currying: What does the last line return?

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3); // 13

// Currying: What does the last line return?

const curriedSum = a => b => a + b;
curriedSum(30)(1); // 31

// Currying: What does the last line return?

const add5 = curriedSum(5);
add5(12); // 17

//Composing: What does the last line return?

const compose = (f, g) => a => f(g(a));
const add1 = num => num + 1;
compose(add1, add5)(10); // 16

//What are the two elements of a pure function?

// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  it does not depend on or affect the outside world
