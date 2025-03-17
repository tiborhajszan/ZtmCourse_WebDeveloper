
// Exercise: ES7

// #1 Check if the "dragons" array includes the name "John"!

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes("John")) // false

// #2 Check if the "dragons" array includes any names that has "John" inside of it!
// If it does, return that name or names in an array!

const johnsArray = dragons.filter(dragon => dragon.includes("John"));
console.log(johnsArray); // ["Johnathan"]

// #3 Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = num => num ** 100;
console.log(power100(2)); // 1.2676506002282294e+30

// #4 Useing your function from #3, put in the paramter 10000! What is the result?
// Research for yourself why you get this result!

console.log(power100(10000)); // 1e+400 -> Infinity
// The biggest number JavaScript can handle is 1.7976931348623157e+308
