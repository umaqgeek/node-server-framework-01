'use strict';

var Queue = require('../models/models/queue_model.js');

const get = function(req, res) {
  Queue.get(req.params.id, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

module.exports = {
  get: get,
};
