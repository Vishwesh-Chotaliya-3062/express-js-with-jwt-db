var express = require('express');
var {states} = require('../states');
var router = express.Router();

router.get('/', function (req, res, next) {
  const allStates = states.sort();
  res.json(allStates);
});

module.exports = router;