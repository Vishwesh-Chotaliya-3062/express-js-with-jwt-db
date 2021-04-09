var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var db = require('../database/db_connection');
var jwt_decode = require('jwt-decode');

process.env.SECRET_KEY = "thisismysecretkey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports.authorize = function (req, res) {

    var token = req.body.token || req.headers['token'];
    var decoded = jwt_decode(token);
    console.log(decoded);
    var username = decoded.data;

    var sql = "SELECT vehicleregistration.UserID, user.UserName, vehicleregistration.VehicleID, " +
    "GROUP_CONCAT(vehicle.VehicleName SEPARATOR ',') as VehicleName, " +
    "vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, " +
    "vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON " +
    "vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON " +
    "user.UserID = vehicleregistration.UserID where user.UserName = '" + username + "'";

    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
    });
}