
// Change the code snippets below to the new Javascript syntax!

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

// destructuring -------------------------------------------------------------------------------------------------------

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

// object properties ---------------------------------------------------------------------------------------------------

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

// template strings ----------------------------------------------------------------------------------------------------

var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// solution

firstName = "Mary";
city = "Washington";
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments: default age to 10; -------------------------------------------------------------------------------

function isValidAge(age) {
    return age;
}

// solution

const isValidAge = (age=10) => age;

// create a symbol: "This is my first Symbol" --------------------------------------------------------------------------

const mySymbol = Symbol("This is my first Symbol");

// arrow functions -----------------------------------------------------------------------------------------------------

function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// solution

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";
