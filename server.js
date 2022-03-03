const express = require('express')
const app = express()
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')
// const fs = require("fs");

app.use(express.json())
app.use (cors())

// app.use(function (req, res, next) {
//     console.log("Request URL: " + req.url);
//     console.log("Request Date: " + new Date());
//     next();
// });
// app.use(function (req, res, next) {
//     // Uses path.join to find the path where the file should be
//     var filePath = path.join(__dirname, 'static', req.url);
//     // Built-in fs.stat gets info about a file
//     fs.stat(filePath, function (err, fileInfo) {
//         if (err) {
//             next();
//             return;
//         }
//         if (fileInfo.isFile()) res.sendFile(filePath);
//         else next();
//     });
// });


const MongoClient = require('mongodb').MongoClient;

//SELECT DATABASE
let db;
MongoClient.connect('mongodb+srv://MyMongoDBUser:December03@gettingstarted.ubxjj.mongodb.net/', (err, client) => {
    db = client.db('webstore')
})
