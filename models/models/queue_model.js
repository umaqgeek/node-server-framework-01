'use strict';

var conn = require('../conndb.js');

var Queue = function(queue) {
  this.patientId = queue.patientId;
  this.name = queue.name;
  this.number = queue.number;
  this.status = queue.status;
};

Queue.get = function(id, result) {
  conn.query('SELECT * FROM queues WHERE patientId = ?', id, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Queue;
