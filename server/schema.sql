CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT,
  message_text VARCHAR(1000) NOT NULL,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY (message_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(room_id) REFERENCES rooms(room_id)
  );

INSERT INTO users (user_name) VALUES ("Sean");
INSERT INTO rooms (room_name) VALUES ("Cool Room");






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

