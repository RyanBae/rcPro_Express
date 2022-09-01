var express = require('express');
var router = express.Router();

const userRepository = require('../repository/userRepository');



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let user = userRepository.findByUser2();
  // json return 
  console.log(user);
  res.json(user);
});


module.exports = router;
