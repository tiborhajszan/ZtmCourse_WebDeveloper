
// #1 change this function into a ternary and assign it to a variable called experiencePoints

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// #1 solution

var experiencePoints = winBattle() ? 10 : 1;

// based on this function, answer the questions below

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

// #2 return value when moveCommand("forward");
// undefined

// #3 return value when moveCommand("back");
// you arrived home

// #4 return value when moveCommand("right");
// you found a river
// why?!?

// #5 return value when moveCommand("left");
// undefined

// BONUS: practice makes perfect
// go and write your own switch function
// it takes time to get used to the syntax

function greetings(dayPart) {
    var greeting;
    switch (dayPart) {
        case "am":
            greeting = "good morning";
            break;
        case "pm":
            greeting = "good afternoon";
            break;
        case "night":
            greeting = "good night";
            break;
        default:
            greeting = "howdy"
    }
    return greeting
}
