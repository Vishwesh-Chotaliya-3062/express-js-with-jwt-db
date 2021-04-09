var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var {
    result,
    creation
} = require('../../middleware/userCreation-middleware');

var db = require('../../database/db_connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/creation', creation);

module.exports = app;