var express = require('express');
var {states} = require('../states');
var router = express.Router();

router.get('/ID/:id', function(req, res, next) {
  const id = req.params.id;
  const statebyID = states.filter(s1 => s1.ID == id);
  const stateNamesByID = statebyID.filter(x => [x.ID,x.StateName]).map(x => ["ID: " + x.ID,"State Name: " + x.StateName]);
  res.json(stateNamesByID);
});

module.exports = router;