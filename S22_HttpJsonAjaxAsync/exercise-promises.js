//######################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// http / JSON / AJAX | Exercise: Promises
//######################################################################################################################

// Solve the exercises below!

// #1 Create a promise that resolves in 4 seconds and returns "success" string!

const promiseDelay = new Promise((resolve, reject) => {
  setTimeout(() => resolve("\nsuccess\n"), 4000);
});

// #2 Run the above promise and make it console.log "success"!

promiseDelay.then(console.log);

// #3 Read about Promise.resolve() and Promise.reject()!
// How can you make the above promise shorter with Promise.resolve() and console logging "success"?

Promise.resolve(setTimeout(() => console.log("\nsuccess\n"), 4000));

// #4 Catch this error and console log "Ooops something went wrong"!

Promise.reject('failed').catch(() => console.log("\nOoops, something went wrong...\n"));

// #5 Use Promise.all to fetch all of these people from Star Wars API (SWAPI) at the same time!
// Console.log the output and make sure it has a catch block as well!

const urls = [
  "https://swapi.py4e.com/api/people/1",
  "https://swapi.py4e.com/api/people/2",
  "https://swapi.py4e.com/api/people/3",
  "https://swapi.py4e.com/api/people/4"
];
Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(people => people.map(person => console.log(person.name + "\n")))
  .catch(() => console.log("\nOoops, something went wrong...\n"));

// #6 Change one of your urls above to make it incorrect and fail the promise!
// Does your catch block handle it?

// Yes
