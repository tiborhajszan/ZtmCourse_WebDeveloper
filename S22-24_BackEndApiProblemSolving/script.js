// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Application Programming Interface :: Chuck Norris Jokes :: JavaScript

// joke text > new joke button > API URL -------------------------------------------------------------------------------

const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("joke-btn");
const apiUrl = "https://api.chucknorris.io/jokes/random";

// fetching new joke from API ------------------------------------------------------------------------------------------

async function getNewJoke() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        jokeText.textContent = data.value;
    } catch {
        jokeText.textContent = "Chuck lost his sense of humor... Please try again!";
    }
}

// adding event listener to new joke button ----------------------------------------------------------------------------

jokeBtn.addEventListener("click", getNewJoke);

// fetching joke on page load ------------------------------------------------------------------------------------------

getNewJoke();
