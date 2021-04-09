var mysql = require('mysql');
// const fastcsv = require("fast-csv");
// const fs = require("fs");
// const ws = fs.createWriteStream("export.csv");

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log('Database is connected successfully !');

  // FOR EXPORTING ROWS FROM COMBINED TABLE
  // conn.query("SELECT user.UserName, user.Status, vehicle.VehicleName, states.StateName, vehicleregistration.RegistrationDate, vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON user.UserID = vehicleregistration.UserID JOIN states ON states.StateID = user.StateID where user.Status = 'True' order by user.UserID", function (error, data, fields) {
  //   if (error) throw error;

  //   const jsonData = JSON.parse(JSON.stringify(data));

  //   fastcsv
  //     .write(jsonData, {
  //       headers: true
  //     })
  //     .on("finish", function () {
  //       console.log("Write to export.csv successfully!");
  //     })
  //     .pipe(ws);
  // });

  // FOR USER TABLE
  // var sql = "INSERT INTO user (UserID, UserName, Email, Password, StateID, Status) VALUES (4, 'Temp', 'temp@gmail.com', 'tmp123', 9, 'false') ";
  // conn.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // // var sql = "UPDATE user SET Email = 'temp123@gmail.com' WHERE UserID = 4 ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Updated");
  // // });

  // // var sql = "DELETE from user WHERE UserName = 'Temp' ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Deleted");
  // // });


  // // FOR VEHICLE TABLE
  // var sql = "INSERT INTO vehicle (VehicleID, VehicleName, VehicleType) VALUES (5, 'Activa 5G', 'Gearless Vehicle') ";
  // conn.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // // var sql = "UPDATE vehicle SET VehicleType = 'Automatic' WHERE VehicleID = 5 ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Updated");
  // // });

  // // var sql = "DELETE from vehicle WHERE VehicleName = 'Activa 5G' ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Deleted");
  // // });


  // // FOR VEHICLE REGISTRATION TABLE
  // var sql = "INSERT INTO vehicleregistration (vehicleregistrationID, UserID, VehicleID, RegistrationDate, ExpiryDate) VALUES (4, 4, 5, '2017-08-29', '2023-12-22') ";
  // conn.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // // var sql = "UPDATE vehicleregistration SET VehicleID = 2 WHERE vehicleregistrationID = 4 ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Updated");
  // // });

  // // var sql = "DELETE from vehicleregistration WHERE ExpiryDate = '2023-12-22' ";
  // // conn.query(sql, function (err, result) {
  // //   if (err) throw err;
  // //   console.log("1 record Deleted");
  // // });


});

module.exports = conn;