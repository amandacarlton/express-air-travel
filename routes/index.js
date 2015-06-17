var express = require('express');
var router = express.Router();
var logic = require("../javascripts/airfare.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Travel Calculator' });
});

router.post('/', function(req, res, next){

  var departure= (req.body.departcity);
  var arrival= (req.body.arrivcity);
  var bag= Number(req.body.bag);
  var seat= (req.body.seat);
  var wifi= (req.body.wifi);
  var discount=req.body.discount;
  res.render('index',{title: 'Air Travel Calculator', price: (logic.airplane(departure,arrival,discount,bag,seat,wifi))});
  console.log(logic.airplane(seat));
});



module.exports = router;
