// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Node.js & Express.js | Exercise: Async Await 2
// #####################################################################################################################

// Solve the problems below!

// #1 ------------------------------------------------------------------------------------------------------------------
// Convert the async function below to top level await!

async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

// Answer:

const response2 = await fetch("https://jsonplaceholder.typicode.com/users");
const data2 = await response2.json();
console.log(data2);

// #2 ------------------------------------------------------------------------------------------------------------------
// ADVANCED: Convert the async functions below wherever possible!

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// Answer:

const [users, posts, albums] = await Promise.all(urls.map(async function(url) {
  const response3 = await fetch(url);
  return response3.json();
}));
console.log("users", users);
console.log("posts", posts);
console.log("albums", albums);

// #3 ------------------------------------------------------------------------------------------------------------------
// ADVANCED: Try to run this piece of code as a JS file outside browser developer tools,
// e.g., in https://glot.io/new/javascript!

const response4 = await fetch("https://jsonplaceholder.typicode.com/users");
const data4 = await response4.json();
console.log(data4);

// It will actually give you an error: "await is only valid in async functions and the top level bodies of modules"!
// WHY?

// ANSWER: Top Level Await ONLY works inside of modules.
// This code runs in the browser developer tools because in the console, it runs like a module.
