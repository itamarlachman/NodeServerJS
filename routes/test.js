var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Test..");
});

/* GET home page. */
router.get('/hi', function(req, res, next) {
  res.send("HI");
});

/* GET home page. */
router.get('/time', function(req, res, next) {
  let time = Date();
  res.send(`${time}`);
});

module.exports = router;
