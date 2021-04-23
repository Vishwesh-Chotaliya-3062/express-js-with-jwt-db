const express = require('express');
var app = express();
const bodyparser = require('body-parser');
var conn = require('../../database/db_connection');
app.use(bodyparser.json());

//Create an employees
app.post('/employees', (req, res, next) => {
    let emp = req.body;
    var sql = "Insert into employees (Name, EmpCode, Salary) values (?,?,?)";
    conn.query(sql, [emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            return res.send('Data inserted successfully');
        else
            console.log(err);
            return res.send('Employee Code must be unique');
    })
});


//Read all employees
app.get('/employees', (req, res, next) => {
    conn.query('SELECT * FROM Employees', (err, rows, fields) => {
        if (!err)
            return res.send(rows);
        else
            console.log(err);
            next(err);
    })
});


//Read an employee
app.get('/employees/:id', (req, res, next) => {
    let id = req.params.id;
    conn.query('SELECT * FROM Employees WHERE EmpID = ?', [id], (err, rows, fields) => {
        if (!err)
            return res.send(rows);
        else
            console.log(err);
        next(err);
    })
});


//Update an employees
app.put('/employees/:id', (req, res) => {
    let id = req.params.id;
    let emp = req.body;
    var sql = "Update employees SET Name = ?, Salary = ? where EmpID = ? ";
    conn.query(sql, [emp.Name, emp.Salary, id], (err, rows, fields) => {
        if (!err)
            return res.send('Data updated successfully');
        else
            console.log(err);
        return res.send('Employee Code must be unique');
    })
});


//Delete an employees
app.delete('/employees/:id', (req, res, next) => {
    let id = req.params.id;
    conn.query('DELETE FROM Employees WHERE EmpID = ?', [id], (err, rows, fields) => {
        if (!err) {
            return res.send('Data deleted successfully.');
        } else {
            console.log(err);
            next(err);
        }
    })
});

module.exports = app;