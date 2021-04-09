var express = require('express');
var {stateNamesIn2020} = require('../states');
var router = express.Router();

router.get('/dateIn2020', function(req, res, next) {
  res.json(stateNamesIn2020);
});

module.exports = router;