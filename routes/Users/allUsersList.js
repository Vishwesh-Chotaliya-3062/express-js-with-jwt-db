var express = require('express');
var router = express.Router();

var db = require('../../database/db_connection');

//To display selected info of all users
router.get('/all-list', function (req, res, next) {

  var sql = "SELECT user.UserID, user.UserName, user.Email, states.StateID, " +
    "user.Status, states.StateName, states.DateCreated, states.DateModified, " +
    "vehicleregistration.VehicleID, vehicle.VehicleName, " +
    "vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, " +
    "vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON " +
    "vehicle.VehicleID = vehicleregistration.VehicleID LEFT JOIN user ON " +
    "user.UserID = vehicleregistration.UserID JOIN states ON " +
    "states.StateID = user.StateID order by user.UserID";

  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;