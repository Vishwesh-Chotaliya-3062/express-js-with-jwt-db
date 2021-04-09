var express = require('express');
var {states} = require('../states');
var router = express.Router();

router.get('/descending', function (req, res, next) {
  const descendingStates = states.reverse();
  const descendingStateNames = descendingStates.filter(x => x.StateName).map(x => ["ID: " + x.ID, "State Name: " + x.StateName]);
  res.json(descendingStateNames);
});

module.exports = router;