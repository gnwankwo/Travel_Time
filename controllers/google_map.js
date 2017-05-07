var express = require('express');
var router = express.Router();
const models = require('../models');

// middleware that is specific to this router 
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Google Map Controller :: Time: ', Date.now());
  next();
});

// define the root google map route
router.get('/', function(req, res) {
  res.send(' Lets find your current location');
});


module.exports = router;