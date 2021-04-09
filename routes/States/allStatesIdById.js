var express = require('express');
var {idByID} = require('../states');
var router = express.Router();

router.get('/ID', function(req, res, next) {
  res.json(idByID);
});

module.exports = router;