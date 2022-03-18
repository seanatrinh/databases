var models = require('../models');
// I need to get the data from models

// use models.messages.getAll , modles.messages.create

module.exports = {
  testMessage: function(req, res) {
    res.send(models.messages.testMessage());
  },
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('controller messages .post working');
    let params = [req.body['message'], req.body['username'], req.body['roomname']];
    console.log(params, '<---- params');
    models.messages.create(params, function(err, results) {
      res.json(results);
    });
  } // a function which handles posting a message to the database

};
