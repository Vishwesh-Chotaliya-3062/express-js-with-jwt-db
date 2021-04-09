var express = require('express');
var router = express.Router();

var db = require('../../database/db_connection');

//To display selected info by passing username

router.get('/user-list/:username', function (req, res, next) {

  const Uname = req.params.username;

  var sql = "SELECT vehicleregistration.UserID, user.UserName, vehicleregistration.VehicleID, " +
    "GROUP_CONCAT(vehicle.VehicleName SEPARATOR ',') as VehicleName, " +
    "vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, " +
    "vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON " +
    "vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON " +
    "user.UserID = vehicleregistration.UserID where user.UserName = '" + Uname + "'";

  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;