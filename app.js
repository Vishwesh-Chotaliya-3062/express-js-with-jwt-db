var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

//For States
var allStatesROuter = require('./routes/States/allStates')
var allStatesIdByIdRouter = require('./routes/States/allStatesIdbyId')
var allStatesInAscendingRouter = require('./routes/States/allStatesInAscending')
var allstatesInDescendingRouter = require('./routes/States/allStatesInDescending')
var allStatesInReverseRouter = require('./routes/States/allStatesInReverse')
var statesByIdRouter = require('./routes/States/statesById')
var statesByNameRouter = require('./routes/States/statesByName')
var statesByLengthRouter = require('./routes/States/statesByLength')
var statesByCreatedIn2020Router = require('./routes/States/statesCreatedIn2020')

app.use('/states', allStatesROuter);
app.use('/states', allStatesIdByIdRouter);
app.use('/states', allStatesInAscendingRouter);
app.use('/states', allstatesInDescendingRouter);
app.use('/states', allStatesInReverseRouter);
app.use('/states', statesByIdRouter);
app.use('/states', statesByLengthRouter);
app.use('/states', statesByNameRouter);
app.use('/states', statesByCreatedIn2020Router);

//For Users
var allUsersListROuter = require('./routes/Users/allUsersList')
var listByStateNameRouter = require('./routes/Users/listByStateName')
var listByUserNameRouter = require('./routes/Users/listByUserName')

app.use('/users', allUsersListROuter);
app.use('/users', listByStateNameRouter);
app.use('/users', listByUserNameRouter);

var userAuthenticationROuter = require('./routes/User Auth/userAuthentication')
var userAuthorizationROuter = require('./routes/User Auth/userAuthorization')

app.use('/', userAuthenticationROuter,
  userAuthorizationROuter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
