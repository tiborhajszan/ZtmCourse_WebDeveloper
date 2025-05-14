// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Back End | Servers | Server With Express Package
// #####################################################################################################################

const express = require("express");
const api = express();
api.listen(3000);

// html server #########################################################################################################

function htmlServer(request, response) {
  response.send("<h1>Hello World!</h1>");
}

api.get("/", htmlServer);

// json server #########################################################################################################

function jsonServer(request, response) {
  const user = {name: "John Doe", hobby: "Coding"}
  response.send(user);
}

api.get("/user", jsonServer);
