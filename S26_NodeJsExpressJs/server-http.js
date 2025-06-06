//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Node.js + Express.js | Server Using Http Library
//######################################################################################################################

const http = require("http");

// html api ############################################################################################################

// html server function ------------------------------------------------------------------------------------------------
function htmlServer(request, response) {
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hello World!</h1>");
  response.write(`<p>URL: ${request.url}</p>`);
  response.end(`<p>Method: ${request.method}</p>`);
};

// creating html api ---------------------------------------------------------------------------------------------------
const htmlAPI = http.createServer(htmlServer);
htmlAPI.listen(3000);

// json api ############################################################################################################

// json server function ------------------------------------------------------------------------------------------------
function jsonServer(request, response) {
  const user = {name: "John Doe", hobby: "Coding"};
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
};

// creating json api ---------------------------------------------------------------------------------------------------
const jsonAPI = http.createServer(jsonServer);
jsonAPI.listen(3001);
