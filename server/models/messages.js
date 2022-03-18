var db = require('../db');
// I need to get the data from /db



module.exports = {
  testMessage: function() {
    db.testMessage();
  },
  getAll: function (callback) {
    db.getAllMessages(callback);
  }, // a function which produces all the messages
  // I want to SELECT * from messages
  create: function (params, callback) {
    db.createMessage(params, callback);
  } // a function which can be used to insert a message into the database
  // I want to INSERT INTO messages (message_text, user_id, room_id) VALUES ("Seans test message", 1, 1)
};
