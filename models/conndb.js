const mysql = require('mysql');

// create connection config
const con = mysql.createConnection({
  host: process.env.HOSTNAME, // "localhost", // your db host (type full url if from other server)
  port: process.env.PORT, // 3306, // your db port number (default is 3306)
  user: process.env.USERNAME, // "root", // your db username
  password: process.env.PASSWORD, // "", // your db password
  database: process.env.DATABASE, // "project_node_db" // your db name
  acquireTimeout: 1000000,
});

// establish connection database
con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected ..");
});

module.exports = con;
