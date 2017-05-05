var express = require('express');
var router = express.Router();

// middleware that is specific to this router 
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log(' Events Controller :: Time: ', Date.now());
  next();
});

// define the root events route
router.get('/events', function(req, res) {
  res.send(' Lets find events near you');
});


module.exports = router;