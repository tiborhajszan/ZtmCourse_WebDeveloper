// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Node.js + Express.js | Building a Server | Server With Http Module
// #####################################################################################################################

const http = require("http");

// html server #########################################################################################################

function htmlServer(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Hello World!</h1>");
    response.write("URL: " + request.url + "<br />");
    response.end("method: " + request.method);
}

const htmlAPI = http.createServer(htmlServer);
htmlAPI.listen(3000);

// json server #########################################################################################################

function jsonServer(request, response) {
    const user = {name: "John Doe", hobby: "Coding"}
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(user));
}

const jsonAPI = http.createServer(jsonServer);
jsonAPI.listen(3001);
