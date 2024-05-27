const mysql = require('mysql2');

const config = require('./config');

const db = mysql.createConnection(config.database);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;

// Comando em SQL para criar o banco no MySQL:
// CREATE DATABASE muninnLibrary;

// USE muninnLibrary;

// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(255) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE
// );
