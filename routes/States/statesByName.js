var express = require('express');
var {states} = require('../states');
var router = express.Router();

router.get('/Name/:name', function(req, res, next) {
  const name = req.params.name.trim();
  const statebyID = states.filter(s1 => s1.StateName.trim().toLowerCase() == name.toLowerCase());
  const stateNamesByID = statebyID.filter(x => [x.StateName, x.ID]).map(x => ["State Name: " + x.StateName,"ID: " + x.ID]);
  res.json(stateNamesByID);
});

module.exports = router;