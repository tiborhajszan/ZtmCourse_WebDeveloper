// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Application Programming Interface :: Chuck Norris Jokes :: Webpage Logic

// chuck image > joke text > new joke button > API URL -----------------------------------------------------------------

const chuckImage = document.getElementById("chuck-image");
const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("joke-btn");
const apiUrl = "https://api.chucknorris.io/jokes/random";

// chuck image inits ---------------------------------------------------------------------------------------------------

const chuckImages = [
    "chuck1.jpg",
    "chuck2.jpg",
    "chuck3.jpg",
    "chuck4.jpg",
];
let chuckIndex = 0;

// cycling chuck image > fetching new joke > error handling ------------------------------------------------------------

async function getNewJoke() {
    try {
        // cycling chuck image
        chuckIndex++;
        if (3 < chuckIndex) {chuckIndex = 0;}
        chuckImage.src = chuckImages[chuckIndex];
        // fetching new joke
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
