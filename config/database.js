// import mysql
const mysql = require("mysql");

// import dotenv dan menjalankan method config
require("dotenv").config();

// destructing object process.env
const { localhost, admin, password, express_covid_api } = process.env;

/**
 * Membuat koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 */
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'express_covid_api',
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.log("Error connecting " + err.stack);
    return;
  } else {
    console.log("Connected to database");
    return;
  }
});

module.exports = db;