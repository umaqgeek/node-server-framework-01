'use strict';

const view = function(req, res) {
  res.send({'message': 'This is backend API'});
};

module.exports = {
  view: view,
};
