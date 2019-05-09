const mysql = require('mysql');

// create connection config
const con = mysql.createConnection({
  host: "localhost", // your db host (type full url if from other server)
  user: "root", // your db username
  password: "", // your db password
  database: "project_node_db" // your db name
});

// establish connection database
con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected ..");
});

module.exports = con;
