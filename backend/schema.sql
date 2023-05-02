DROP TABLE IF EXISTS Customers;
CREATE TABLE Customers (CustomerID INT, UserName TEXT, FirstName TEXT, LastName TEXT, PRIMARY KEY (`CustomerID`));
INSERT INTO Customers (CustomerID, UserName, FirstName, LastName) VALUES (1, 'conor', 'Conor', 'Fennell'), (2, 'alan', 'Alan', 'Fitzpatrick');