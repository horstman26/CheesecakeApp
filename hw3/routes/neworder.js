//orders js file
var express = require('express');
var router = express.Router();
const mysql = require('mysql');

router.post('/', function(req, res, next) {

  const num = Math.ceil(Math.random() * 1000);

  console.log("quantity: " + res.body.quantity);
  console.log("topping: " + res.body.notes);
  console.log("notes: " + res.body.notes);
  
  dbms.dbquery("INSERT INTO ORDERS(" + num + ", FEB, 29, " + res.body.quantity + ", '" + res.body.topping + "', '" + res.body.notes + "');");

  //INSERT INTO ORDERS(ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES);
  //'" + res.req.body.MONTH + "'"
  //$.post('/neworder', { quantity: numToppings, topping: flavor, notes: boxInput });

});

module.exports = router;