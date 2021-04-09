var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var {
    result,
    authorize
} = require('../../middleware/authorize-middleware');
var db = require('../../database/db_connection');
var jwt_decode = require('jwt-decode');

process.env.SECRET_KEY = "thisismysecretkey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/authorize', authorize);

module.exports = app;