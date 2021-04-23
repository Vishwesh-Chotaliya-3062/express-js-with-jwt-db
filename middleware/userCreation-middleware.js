var express = require("express");
var app = express();
const bodyparser = require('body-parser');
var conn = require('../database/db_connection');
app.use(bodyparser.json());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports.creation = function (req, res) {

        let emp = req.body;
        var sql = "Insert into user (UserID, UserName, Email, Password, StateID, Status) values (?,?,?,?,?,?)";
        conn.query(sql, [emp.UserID, emp.UserName, emp.Email, emp.Password, emp.StateID, emp.Status], (err, rows, fields) => {
            if (!err)
                return res.send('Data inserted successfully');
            else
                console.log(err);
                return res.send('UserID, UserName and Email must be unique');
        })

}