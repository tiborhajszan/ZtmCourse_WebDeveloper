//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Advanced JavaScript | ES5 & ES6 Exercise
//######################################################################################################################

//#####################################################################################################################
// Convert the code snippets below to comply with ES5 and ES6 syntax!

// template strings ----------------------------------------------------------------------------------------------------

var firstName = "Mary";
var city = "Washington";
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// solution

const firstName = "Mary";
const city = "Washington";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// create a symbol: "This is my first Symbol" --------------------------------------------------------------------------

const mySymbol = Symbol("This is my first Symbol");

// object declaration > property matches value -------------------------------------------------------------------------

var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// solution

const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};

// object destructuring ------------------------------------------------------------------------------------------------

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// solution

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;

// let + const ---------------------------------------------------------------------------------------------------------

var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// solution

let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// default arguments: default age to 10 --------------------------------------------------------------------------------

function isValidAge(age) {
    return age;
};

// solution

function isValidAge(age=10) {
    return age;
};

// arrow functions -----------------------------------------------------------------------------------------------------

function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    };
};

// solution

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";
