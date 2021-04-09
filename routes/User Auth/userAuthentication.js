var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var {
    result,
    authenticate
} = require('../../middleware/authenticate-middleware');
var jwt_decode = require('jwt-decode');

process.env.SECRET_KEY = "thisismysecretkey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/authenticate', authenticate);

module.exports = app;
