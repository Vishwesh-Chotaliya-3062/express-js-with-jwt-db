var express = require("express");
const { NotExtended } = require("http-errors");
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var db = require('../database/db_connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports.creation = function (req, res) {


    var userid = req.body.userid;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var statesid = req.body.statesid;
    var status = req.body.status;

    var sql = "INSERT INTO user (UserID, UserName, Email, Password, StateID, Status) " +
              " VALUES ('"+ userid +"','"+ username +"','"+ email +"','"+ password +"','"+ statesid +"','"+ status +"')";

    var sql2 = "Select UserID, UserName, Email, StateID, Status from user where UserID = '"+ userid +"'";

    db.query(sql, function (err, data, fields) {
        if (err) throw res.send('User with this data already exists');

    });

    db.query(sql2, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
    });

}