const express = require('express')
const app = express()
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')
// const fs = require("fs");

app.use(express.json())
app.use (cors())

app.use(function (req, res, next) {
    console.log("Request URL: " + req.url);
    console.log("Request Date: " + new Date());
    next();
});
app.use(function (req, res, next) {
    // Uses path.join to find the path where the file should be
    var filePath = path.join(__dirname, 'static', req.url);
    // Built-in fs.stat gets info about a file
    fs.stat(filePath, function (err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) res.sendFile(filePath);
        else next();
    });
});

const MongoClient = require('mongodb').MongoClient;

//SELECT DATABASE
let db;
MongoClient.connect('mongodb+srv://MyMongoDBUser:December03@gettingstarted.ubxjj.mongodb.net/', (err, client) => {
    db = client.db('webstore')
})
//SELECT COLLECTION
app.param('collectionName', (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName)
    return next()
})
//DISPLAY A MESSAGE FOR ROOT PATH TO SHOW THAT API IS WORKING
app.get('/', (req, res, next) => {
    res.send('Welcome to the MongoDB Express server.')
})
//RETRIEVE ALL THE OBJECTS FROM A COLLECTION
app.get('/collection/:collectionName', (req, res) => {
    req.collection.find({}).toArray((error, results) => {
        if (error) return next(error)
        res.send(results)
    })
})
//RETIREVE AN OBJECT BY MONGODB ID
const ObjectID = require('mongodb').ObjectId;
app.get('/collection/:collectionName/:id', (req, res, next) => {
    req.collection.findOne(
        { _id: new ObjectID(req.params.id) },
        (error, result) => {
            if (error) return next(error)
            res.send(result)
        })
})
//ADD AN OBJECT
app.post('/collection/:collectionName', (req, res, next) => {
    req.collection.insertOne(req.body, (error, results) => {
        if (error) return next(error)
        res.send(results.ops)
    })
})
//UPDATE AN OBJECT BY ID
app.put('/collection/:collectionName/:id', (req, res, next) => {
    req.collection.updateOne(
        {_id: new ObjectID(req.params.id)},
        {$set: req.body},
        {safe: true, multi: false},
        (error, result) => {
            if (error) return next(error)
            res.send((result.result.n === 1) ?
                {msg: 'success'} : { msg: 'error'})
        })
})
//DELETE AN OBJECT BY ID
app.delete('/collection/:collectionName/:id', (req, res, next) => {
    req.collection.deleteOne(
        {_id: ObjectID(req.params.id)},
        (error, result) => {
            if (error) return next(error)
            res.send((result.result.n === 1) ?
                {msg: 'success'} : {msg: 'error'})
        })
})

app.listen(3000)
