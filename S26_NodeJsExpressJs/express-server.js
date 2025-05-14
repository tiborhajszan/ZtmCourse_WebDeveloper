// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Back End | Servers | Server With Express Package, Express Middleware
// #####################################################################################################################

const express = require("express");
const api = express();
api.listen(3000);

// express middleware ##################################################################################################

api.use((request, response, next) => {
  console.log("I am a middleware!");
  next();
});

// html server #########################################################################################################

api.get("/", (requst, response) => {
  response.send("<h1>Hello World!</h1>");
});

// json server #########################################################################################################

api.get("/user", (request, response) => {
  const user = {name: "John Doe", hobby: "Coding"}
  response.send(user);
});
