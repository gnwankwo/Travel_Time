var express = require('express');
var router = express.Router();

// middleware that is specific to this router 
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('FaceBook Controller :: Time: ', Date.now());
  next();
});

// define the root facebook route
router.get('/facebook', function(req, res) {
  res.send('FaceBook Login Page');
});

module.exports = router;