//orders js file
var express = require('express');
var router = express.Router();

//json object
var cakeData = [
  { topping: 'cherry', quantity: '5' }, 
  { topping: 'plain', quantity: '3' }, 
  { topping: 'chocolate', quantity: '9' }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ error: null, data: cakeData} );
});

module.exports = router;


 
 