var express = require('express');
var router = express.Router();

var db = require('../../database/db_connection');

//To display selected info by passing statename

router.get('/state-list/:statename', function (req, res, next) {

  const Sname = req.params.statename;

  var sql = "SELECT states.StateID, states.StateName, GROUP_CONCAT(vehicle.VehicleID SEPARATOR ',') as VehicleID, " +
    "GROUP_CONCAT(vehicle.VehicleName SEPARATOR ',') as VehicleName, " +
    "vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, " +
    "vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON " +
    "vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON " +
    "user.UserID = vehicleregistration.UserID JOIN states ON " +
    "states.StateID = user.StateID where states.StateName = '" + Sname + "'";
    
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;