const mysql = require('mysql');

let con;

function handleReconnect(conntype) {

  console.log(conntype);

  // create connection config
  con = mysql.createConnection({
    host: process.env.HOSTNAME || "localhost", // your db host (type full url if from other server)
    port: 3306, // your db port number (default is 3306)
    user: process.env.USERNAME || "root", // your db username
    password: process.env.PASSWORD || "", // your db password
    database: process.env.DATABASE || "project_node_db", // your db name
  });

  con.on('error', function(err) {
    console.log('db error', err);
    console.log('error code: ' + err.code);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleReconnect(3);                         // lost due to either server restart, or a
    } else {
      throw err;
    }
  });

  // establish connection database
  con.connect(function(err) {
    if (err) {
      console.log(err);
      setInterval(() => handleReconnect(2), 2000);
    }
    console.log("Connected ..");
  });
};
handleReconnect();

module.exports = con;
