'use strict';

var conn = require('../conndb.js');

var Drug = function(drug) {
  this.name = drug.name;
  this.category = drug.category;
  this.status = drug.status;
};

Drug.getAll = function(result) {
  conn.query('SELECT * FROM drugs', function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Drug.get = function(id, result) {
  conn.query('SELECT * FROM drugs WHERE id = ?', id, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Drug.create = function(newData, result) {
  conn.query('INSERT INTO drugs set ?', newData, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Drug.remove = function(id, result) {
  conn.query('DELETE FROM drugs WHERE id = ?', id, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Drug.edit = function(id, newData, result) {
  conn.query('UPDATE drugs SET name = ?, category = ?, status = ? WHERE id = ?', [
    newData.name,
    newData.category,
    newData.status,
    id,
  ], function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Drug;
