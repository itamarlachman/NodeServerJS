console.log('index.js (start)');
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Lilit7715',
  database : 'kinneret'
});
 
connection.connect();
console.log("connected to data-base.")
connection.query('SELECT * FROM `customers`', function (error, results, fields) {
  if (error) throw error;
  for(row in results) {
    console.log(results[row]);
  }
});
 
connection.end();
