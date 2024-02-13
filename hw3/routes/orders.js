//orders js file
var express = require('express');
var router = express.Router();

var cakeData = [
  { topping: "cherry", quantity: 5 }, 
  { topping: "plain", quantity: 3 }, 
  { topping: "chocolate", quantity: 9 }
];

/*
router.get('/', function(req, res, next) {
  res.json({ error: null, data: cakeData});
});
*/

router.post('/', function(req, res, next) {
  res.json({ error: null, data: cakeData});
});

module.exports = router;


 
 