var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

/*
What I should've done:

module.exports = connection
- that way, in my mdoels, I can write connection.query statements
*/

module.exports = {
  testMessage: function() {
    console.log('hello? yah yeet');
  },
  getAllMessages: function(callback) {
    connection.query(
      'SELECT message_id, message_text, room_name, user_name FROM messages m \
      LEFT JOIN users u ON (m.user_id = u.user_id) \
      ORDER BY 1 desc;',
      function(err, results) {
        callback(err, results);
      }
    );
  },
  createMessage: function(params, callback) {
    let queryStr = 'INSERT INTO messages(message_text, user_id, room_name) \
                    VALUES (?, \
                    (SELECT user_id FROM users WHERE user_name = ? LIMIT 1),  \
                    ?);';
    connection.query(queryStr, params, function(err, results) {
      console.log('createMessage results ---', results);
      callback(err, results);
    });
  },

  getAllUsers: function(callback) {
    connection.query(
      'SELECT * FROM `users`',
      function(err, results) {
        console.log('db.getAllUsers executing ---', results);
        callback(err, results);
      }
    );
  },
  createUser: function(params, callback) {
    let queryStr = 'INSERT INTO users(user_name) VALUES (?)';
    connection.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
};



// Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// simple query tests

// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results) {
//     console.log('users query: ', results); // results contains rows returned by server
//   }
// );

// connection.query(
//   'SELECT * FROM `rooms`',
//   function(err, results) {
//     console.log('rooms query: ', results); // results contains rows returned by server
//   }
// );

// connection.query(
//   'SELECT * FROM `messages`',
//   function(err, results) {
//     console.log('messages query: ', results); // results contains rows returned by server
//   }
// );