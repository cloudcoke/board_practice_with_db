const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1",
    database: "cloudcoke",
    connectionLimit: 5,
  })
  .promise();

module.exports = pool;
