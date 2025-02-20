// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Basic JavaScript :: Facebook App :: Signin Script

// user database -------------------------------------------------------------------------------------------------------

var userDb = [
    {username: "thajszan", password: "booboo"},
    {username: "tim", password: "whatever"},
    {username: "sally", password: "777"}
];

// newsfeed database ---------------------------------------------------------------------------------------------------

var newsFeed = [
    {username: "thajszan", timeline: "JavaScript is cool!"},
    {username: "tim", timeline: "JavaScript is pretty cool!"},
    {username: "sally", timeline: "JavaScript is friggin cool!"}
];

// signin function -----------------------------------------------------------------------------------------------------

function signIn(username, password) {
    for (var index = 0; index < userDb.length; index++) {
        if (username === userDb[index].username && password === userDb[index].password) {
            console.log(newsFeed);
            return
        }
    }
    alert("Wrong username and/or password!");
    return
}

// login script --------------------------------------------------------------------------------------------------------

var userName = prompt("Enter your username:");
var passWord = prompt("Enter your password:");
signIn(userName, passWord);
