'use strict';

const mysql = require('mysql2');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: process.env.database
});
module.exports = mysqlConnection;