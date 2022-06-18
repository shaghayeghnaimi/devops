var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql2 = require("mysql2/promise");
const db = require("./db")

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

db.init();
app.set("mysqlQuery", db.query);

// (async () => {
//   try{
//     // const con = await pool.getConnection()
//     // console.log(con)

//     const insertRes = await pool.query("insert into user (name) values ('pouria')")
//     console.log(insertRes[0])

//     await showSelect()

//     const updateRes = await pool.query("update user set name='amghezi' where id=2");
//     console.log(updateRes[0])

//     await showSelect()

//     const deleteRes = await pool.query("delete from user where id=3");
//     console.log(deleteRes[0])

//     await showSelect()

//   } catch (err) {
//     console.log(err)
//   }
// })()

// async function showSelect() {
//   const selectRes = await pool.query("select * from user;");
//   const selectResults = selectRes[0] 

//   for(let selectResult of selectResults) {
//     console.log(`id: ${selectResult.id}, name: ${selectResult.name}`)
//   }
// }

module.exports = app;
