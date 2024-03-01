//orders js file
var express = require('express');
var router = express.Router();
var dbms = require('./dbms');


var cakeData = [
  { topping: "cherry", quantity: 0 }, 
  { topping: "plain", quantity: 0 }, 
  { topping: "chocolate", quantity: 0 }
];

//send data cakeData
router.post('/', function(req, res, next) {

  console.log(res.req.body.MONTH);

  dbms.dbquery("select * from ORDERS where MONTH = '" + res.req.body.MONTH + "'", function(err, results){
    cakeData[0].quantity = 0;
    cakeData[1].quantity = 0;
    cakeData[2].quantity = 0;

    if(!(err === null)){
      for(var i = 0; i < results.length; i++){
        if(results[i].TOPPING == 'cherry'){
          cakeData[0].quantity += results[i].QUANTITY;
        }
        if(results[i].TOPPING == 'plain'){
          cakeData[1].quantity += results[i].QUANTITY;
        }
        if(results[i].TOPPING == 'chocolate'){
          cakeData[2].quantity += results[i].QUANTITY;
        }
      }
      res.json({ error: null, data: cakeData});
    }
    else{
      console.log('error in orders');
      res.json({ error: null, data: cakeData});
    }
  });
});

module.exports = router;


 
 