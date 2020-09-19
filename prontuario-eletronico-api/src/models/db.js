const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to MYSQL database.');
});

module.exports = connection;