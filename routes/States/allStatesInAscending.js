var express = require('express');
var {ascendingStateNames} = require('../states');
var router = express.Router();

router.get('/ascending', function(req, res, next) {
  res.json(ascendingStateNames);
});

module.exports = router;