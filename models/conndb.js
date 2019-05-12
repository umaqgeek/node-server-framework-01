const mysql = require('mysql');

// create connection config
const con = mysql.createConnection({
  host: process.env.HOSTNAME || "localhost", // your db host (type full url if from other server)
  port: 3306, // your db port number (default is 3306)
  user: process.env.USERNAME || "root", // your db username
  password: process.env.PASSWORD || "", // your db password
  database: process.env.DATABASE || "project_node_db", // your db name
});

function handleReconnect(con) {
  // establish connection database
  return con.connect(function(err) {
    if (err) {
      console.log(err);
      setTimeout(handleReconnect(con), 2000);
    }
    console.log("Connected ..");
  });
};
handleReconnect(con);

module.exports = con;
