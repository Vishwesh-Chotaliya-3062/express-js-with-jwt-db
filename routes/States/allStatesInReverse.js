var express = require('express');
var {reverseName}= require('../states');
var router = express.Router();


router.get('/Reverse', function(req, res, next) {
  res.json(reverseName);
});

module.exports = router;