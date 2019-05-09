module.exports = (app) => {

  var coreController = require('../controllers/core_controller');
  app.get('/', coreController.view);

  var drugController = require('../controllers/drug_controller');
  app.get('/drugs', drugController.list_all); // view all drugs.
  app.get('/drug/:id', drugController.get); // view one drug.
  app.post('/drug', drugController.create); // create one drug.
  app.delete('/drug/:id', drugController.remove); // remove one drug.
  app.put('/drug/:id', drugController.edit); // update one drug.

};
