DROP TABLE IF EXISTS users;
CREATE TABLE users (id INT, username TEXT UNIQUE, firstName TEXT, lastName TEXT, PRIMARY KEY (`id`));
INSERT INTO users (id, username, firstName, lastName) VALUES (1, 'conor', 'Conor', 'Fennell'), (2, 'alan', 'Alan', 'Fitzpatrick');