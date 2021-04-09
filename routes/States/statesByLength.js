var express = require('express');
var router = express.Router();

router.get('LengthThisorLess/:length', function (req, res, next) {

  const stateLength = states.filter(s2 => s2.StateName.length <= req.params.length);
  const stateNamesLength = stateLength.filter(x => x.StateName).map(x => "State Name: " + x.StateName);
  res.json(stateNamesLength);
});


module.exports = router;