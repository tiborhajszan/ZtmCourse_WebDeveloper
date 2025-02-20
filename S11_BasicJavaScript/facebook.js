// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Basic JavaScript :: Facebook App :: Signin Script

// user database -------------------------------------------------------------------------------------------------------

var userDatabase = [
    {username: "thajszan", password: "booboo"}
];

// newsfeed database ---------------------------------------------------------------------------------------------------

var newsFeed = [
    {username: "hugh", timeline: "JavaScript is cool!"},
    {username: "angelina", timeline: "JavaScript is pretty cool!"},
    {username: "chris", timeline: "JavaScript is friggin cool!"}
];

// signin function -----------------------------------------------------------------------------------------------------

function signIn(username, password) {
    if (username === userDatabase[0].username && password === userDatabase[0].password) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and/or password!");
    }
}

// login script --------------------------------------------------------------------------------------------------------

var username = prompt("Enter your username:");
var password = prompt("Enter your password:");
signIn(username, password);
