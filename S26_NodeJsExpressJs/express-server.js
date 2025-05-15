// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Back End | Servers | Server With Express Package, Express Middleware
// #####################################################################################################################

const express = require("express");
const api = express();
api.listen(3000);

// middleware > parsing request body ###################################################################################

api.use(express.urlencoded({extended: false}));
api.use(express.json());

// get root ############################################################################################################

api.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

// get /user ###########################################################################################################

api.get("/user", (request, response) => {
  const user = {name: "John Doe", hobby: "Coding"};
  response.send(user);
});

// post /user ##########################################################################################################

api.post("/user", (request, response) => {
  response.send(request.body);
});
