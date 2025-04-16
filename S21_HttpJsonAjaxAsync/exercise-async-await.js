//######################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// http / JSON / AJAX | Exercise: Async Await
//######################################################################################################################

// Solve the exercises below!

// #1 ------------------------------------------------------------------------------------------------------------------
// Convert the promise below into async await!

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();
  console.log(data);
}
fetchUsers();

// #2 ------------------------------------------------------------------------------------------------------------------
// ADVANCED: Update the function below from the video to also have async await for this line:
// fetch(url).then(resp => resp.json()), so there shouldn't be any .then() calls anymore!
// Don't get discouraged... This is a really tough one...

const urlArray = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urlArray.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
}
getData();

async function fetchData () {
  const dataArray = await Promise.all(urlArray.map(async function (url) {
    const response = await fetch(url);
    return response.json();
  }));
  dataArray.map(data => console.log(data[0]));
};
fetchData();

// #3 ------------------------------------------------------------------------------------------------------------------
// Add a try-catch block to the #2 solution in order to catch any errors!
// Use the given array containing an invalid url, so you console.log your error as "Oooooops!"!

const urlTypo = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function catchData () {
  try {
    const dataArray = await Promise.all(urlTypo.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }));
    dataArray.map(data => console.log(data[0]));
  } catch (error) {
    console.log("\nOooooops!\n");
  }
};
catchData();
