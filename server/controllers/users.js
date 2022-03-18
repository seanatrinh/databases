var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('controller users .get working');
    models.users.getAll(function(err, results) {
      if (err) {
        throw 'Error';
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    console.log('controller users .post working');
    let params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        throw 'Error';
      } else {
        res.json(results);
      }
    });
  }
};
