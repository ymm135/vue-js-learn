var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsonObj = {'user':'xiaoming','age':18};
  let data=JSON.stringify(jsonObj)

  console.log(data);
  res.send(data);
});

module.exports = router;
