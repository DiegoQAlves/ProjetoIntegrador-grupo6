CREATE TABLE Compradores
(
	idField int IDENTITY(1,2), 
	CustomerName VARCHAR(20) default 'unknown',
	CustomerSurname VARCHAR(25) default 'unknown',
	CustomerPhone VARCHAR(12) NOT NULL,
	CustomerEmail VARCHAR(45) NOT NULL,
	RegistrationTime date NULL,
	primary key(CustomerPhone, CustomerEmail)
)

CREATE TABLE Pedidos
(
	OrderID int IDENTITY NOT NULL primary key,
	PersonalID int NOT NULL foreign key references Customers(PersonalID),
	OrderDate date NOT NULL,
	Goods VARCHAR(30) NOT NULL
)

CREATE TABLE Valor
(
    codPreco int IDENTITY NOT NULL primary key,
    codTipo int NOT NULL,
    codNom int NOT NULL foreign key references Nomenclatura(codNom),
    price VARCHAR(8) NOT NULL
)

CREATE TABLE Nomenclatura 
(
    codNom int IDENTITY NOT NULL primary key,
    nomeNom VARCHAR(50) NOT NULL,
    unMed VARCHAR(5) NOT NULL,
    peso VARCHAR(5) NOT NULL,
)

CREATE TABLE Composicao
(
    codComp VARCHAR(4) NOT NULL,
    codNom int NOT NULL foreign key references Nomenclatura(codNom),
    codIng VARCHAR(14) NOT NULL,
)

CREATE TABLE Ingrediente(
    codIng int IDENTITY NOT NULL primary key,
    nomeIng VARCHAR(50) NOT NULL,
)