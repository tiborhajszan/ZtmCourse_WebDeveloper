// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Application Programming Interface :: Chuck Norris Jokes :: Webpage Logic

// DOM elements and API URL --------------------------------------------------------------------------------------------

const navMenu = document.querySelector(".nav-menu");
const navBtn = document.querySelector(".nav-btn");
const navClose = document.getElementById("nav-close");
const chuckImage = document.getElementById("chuck-image");
const apiUrl = "https://api.chucknorris.io/jokes/random";
const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("joke-btn");

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

// adding event listeners ----------------------------------------------------------------------------------------------

navBtn.addEventListener("click", () => {navMenu.classList.toggle("open");});
navClose.addEventListener("click", () => {navMenu.classList.toggle("open");});
jokeBtn.addEventListener("click", getNewJoke);

// fetching joke on page load ------------------------------------------------------------------------------------------

getNewJoke();
