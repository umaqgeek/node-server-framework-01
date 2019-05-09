'use strict';

var Drug = require('../models/models/drug_model.js');

const list_all = function(req, res) {
  Drug.getAll(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

const get = function(req, res) {
  Drug.get(req.params.id, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

const create = function(req, res) {
  var newData = new Drug(req.body);
  if (
    !newData.name ||
    !newData.category ||
    !newData.status
  ) {
    res.status(400).send({error: true, message: 'Please do not leave blank'});
  } else {
    Drug.create(newData, function(err, data) {
      if (err) {
        res.send(err);
      }
      res.send(data);
    });
  }
};

const remove = function(req, res) {
  Drug.remove(req.params.id, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send({ message: 'Drug successfully deleted' });
  });
};

const edit = function(req, res) {
  Drug.edit(req.params.id, new Drug(req.body), function(err, data) {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

module.exports = {
  list_all: list_all,
  get: get,
  create: create,
  remove: remove,
  edit: edit,
};
