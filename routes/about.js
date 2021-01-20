var express = require('express');
var router = express.Router();
const ver = 1.2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("About.....");
});

router.get('/version', (req,res) => {
    res.send(`Versions is. ${ver}`);
});  


module.exports = router;