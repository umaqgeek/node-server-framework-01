const mysql = require('mysql');

let con;

function handleReconnect() {
  // create connection config
  con = mysql.createConnection({
    host: process.env.HOSTNAME || "localhost", // your db host (type full url if from other server)
    port: 3306, // your db port number (default is 3306)
    user: process.env.USERNAME || "root", // your db username
    password: process.env.PASSWORD || "", // your db password
    database: process.env.DATABASE || "project_node_db", // your db name
  });

  // establish connection database
  con.connect(function(err) {
    if (err) {
      console.log(err);
      setTimeout(handleReconnect(), 2000);
    }
    console.log("Connected ..");
  });

  con.on('error', function(err) {
    console.log('db error', err);
    console.log('error code: ' + err.code);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleReconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
};
handleReconnect();

module.exports = con;
