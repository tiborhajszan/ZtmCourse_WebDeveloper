
// Exercise: Advanced Arrays

// Answer the questions below using this array:

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

// Create a new array using forEach by adding a "!" to each username!

const eachArray = [];
array.forEach(item => eachArray.push(item.username + "!"));
console.log(eachArray);

// Create an new array using map by adding a "?" to each username!

const mapArray = array.map(item => item.username + "?");
console.log(mapArray);

// Filter the array to only include users who are on team: red!

const filterArray = array.filter(item => item.team === "red");
console.log(filterArray);

// Find out the total score of all users using reduce!

const reduceArray = array.reduce((acc, item) => acc + item.score, 0);
console.log(reduceArray);

// (1) What is the value of i?
// (2) Make this map function pure!

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// Solution

// (1) i = index of current item

// (2)
const pureArray = arrayNum.map((num, i) => num * 2);

// BONUS: Create a new array with all user information, but add a "!" to each item they own!

const bonusArray = array.map(user => {
  user.items = user.items.map(item => item + "!");
  return user;
})
console.log(bonusArray);
