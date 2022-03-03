// var http = require('http')

// function requestHandler(request, response) {
//     console.log('Incoming request from' + request.url)
//     response.end('hello from the node.js server.')
// }

// var server = http.createServer(requestHandler)
// server.listen(3000)

// const express = require("express");
// const http = require('http');

// const app = express();

// app.use(function(request, response) {
//     console.log("In comes a request to: " + request.url);
//     response.end("Hello, world!");
// });

// http.createServer(app).listen(3000);

// var express = require("express");
// var app = express();

// app.use(function(req, res, next) {
//     console.log("Request IP: " + req.url);
//     console.log("Request date: " + new Date());
//     next();
// });

// app.listen(3000, function() {
//     console.log("App started on port 3000");
// });

// // Requires the modules needed
// var path = require("path");
// var fs = require("fs");

// app.use(function(req, res, next) {
//     // Uses path.join to find the path where the file should be
//     var filePath = path.join(__dirname, "static", req.url);
//     // Built-in fs.stat gets info about a file
//     fs.stat(filePath, function(err, fileInfo) {
//         if (err) {
//             next();
//             return;
//         }
//         if (fileInfo.isFile()) res.sendFile(filePath);
//         else next();
//     });
// });

// app.use(function(req, res) {
//     res.status(404);
//     res.send("File not found");
// });

// const express = require('express');
// const app = express()

// app.get('/olivia', function(req, res){
//     res.send("Welcome to Olivia's homepage")
// })

// app.use(function(req, res){
//     res.status(404).send("Page not found")
// })

// app.listen(3000);

// const { application } = require('express')
// const express = require('express')
// const cors = require('cors')

// const app = express()
// app.use(cors())

// app.get('/olivia', (req, res) => {
//     res.send("Welcome to Olivia express route")
// })

// app.use( (req, res) => {
//     res.status(404).send('File not found!')
// })

// app.listen(3000)

var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("you just sent a GET request, friend");
});
app.post("/", function(req, res) {
    res.send("a POST request? nice");
});

app.listen(3000, function() {
    console.log("CRUD app is listening on port 3000");
});