// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Back End | Servers | Express RESTful API Server
// #####################################################################################################################

const express = require("express");
const api = express();
api.listen(3000);

// middleware > parsing request body ###################################################################################

api.use(express.urlencoded({extended: false}));
api.use(express.json());
api.use(express.static(__dirname));
api.use("/static", express.static(__dirname));

// get /method #########################################################################################################

api.get("/method", (request, response) => {
  response.status(200).send("Request Method: " + request.method);
});

// get /url ############################################################################################################

api.get("/url", (request, response) => {
  response.status(200).send("Request URL: " + request.url);
});

// get /params #########################################################################################################

api.get("/params/:id", (request, response) => {
  response.status(200).json(request.params);
});

// get /query ##########################################################################################################

api.get("/query", (request, response) => {
  response.status(200).json(request.query);
});

// get /headers ########################################################################################################

api.get("/headers", (request, response) => {
  response.status(200).json(request.headers);
});

// post /body ##########################################################################################################

api.post("/body", (request, response) => {
  response.status(200).json(request.body);
});
