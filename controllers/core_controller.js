'use strict';

const view = function(req, res) {
  res.send('This is backend API');
};

module.exports = {
  view: view,
};
