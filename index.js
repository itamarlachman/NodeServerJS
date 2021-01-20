console.log('index.js (start)');

// Define a server
const PORT = 3000;
var express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let server = express();
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())
server.options('*', cors());

var test = require('./routes/test');
var about = require('./routes/about');

server.use('/test', test);
server.use('/about', about);

// Connect Data Base
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Lilit7715',
  database : 'kinneret'
});
 
connection.connect();
console.log("connected to data-base.")

server.post('/register', function(req,res) {
    let first = req.body.first;
    let last = req.body.last;
    let name = 'no body'
    if (first != undefined && last != undefined) {
        name = `${first} ${last}`;
    }   
    res.send(`Hello ${name}`);
});

server.get('/about', (req,res) => {
    res.send(`<html><head><body> <button onclick="alert('Hello World')"> TEST </button> </body></head></html>`)
});

server.get('/', (req,res) => {
    res.send(`Server is up and running.`)
});

const version = 1.2;
server.get('/info', (req,res) => {
    res.send(`Versions is. ${version}`);
});

server.get('/customers', (req,res) => {
    connection.query('SELECT * FROM `customers`', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});


server.post('/addCustomer', (req,res) => {
    connection.query("INSERT INTO `customers` ( `name`, `email`, `tel`) VALUES ( 'Test1', 'test1@gmail.com', '09-45546657');");
    connection.query('SELECT * FROM `customers`', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
})

let counter = 0;
server.post('/test', (req,res) => {
    const cat = req.body.cat;
    cat.age ++;
    counter++;
    let result =    {
        message: "success",
        result: new Date(),
        cat: cat,
        result1: [
           {
             name: "itamar",
             email: "itamar.lachman@gmail.com"
           },
           {
            name: "avi",
            email: "avi.lieber@gmail.com"
          }
       ]   
    };
    res.send(result);
});



console.log('set port server listens');
server.listen(PORT, () => {
    console.log(`server is listenning on port: ${PORT}`);    
});
console.log('start server');
console.log('index.js (end)');