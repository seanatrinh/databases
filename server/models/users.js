var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.getAllUsers(callback);
  },
  create: function (params, callback) {
    db.createUser(params, callback);

  }
};
