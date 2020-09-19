/* eslint-disable no-undef */
const mysql = require('mysql');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.getConnection(error => {
  if (error) throw error;
  console.log('Successfully connected to MYSQL database.');
});

module.exports = connection;