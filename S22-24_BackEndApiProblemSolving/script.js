//----------------------------------------------------------------------------------------------------------------------
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Application Programming Interface :: Chuck Norris Jokes :: Webpage Logic
//----------------------------------------------------------------------------------------------------------------------

// DOM elements and API URL --------------------------------------------------------------------------------------------

const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");
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
        // cycling chuck image .........................................................................................
        chuckIndex++;
        if (3 < chuckIndex) {chuckIndex = 0;}
        chuckImage.src = chuckImages[chuckIndex];
        // fetching new joke ...........................................................................................
        const apiResponse = await fetch(apiUrl);
        const jokeData = await apiResponse.json();
        jokeText.textContent = jokeData.value;
    } catch {
        jokeText.textContent = "Chuck lost his sense of humor... Please try again!";
    }
}

// adding event listeners ----------------------------------------------------------------------------------------------

navBtn.addEventListener("click", () => {navMenu.classList.toggle("open");});
navClose.addEventListener("click", () => {navMenu.classList.remove("open");});
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navBtn.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});
jokeBtn.addEventListener("click", getNewJoke);

// fetching joke on page load ------------------------------------------------------------------------------------------

getNewJoke();
