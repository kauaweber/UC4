
// // Como criar uma tabela
// CREATE TABLE IF NOT EXISTS usuarios (
// //nome|Tipo| Outras Caracteristicas
// id INT PRIMARY KEY,
// nome VARCHAR(100),
// idade INT,
// email VARCHAR(50),
// senha VARCHAR(255)
// );

// ALTER TABLE usuarios ADD endereço VARCHAR(100);


// Como alterar uma tabela e mudar o nome de uma coluna
//(pode mudar o tipo tambem)
//ALTER TABLE usuarios
//CHANGE COLUMN endereço logradouro VARCHAR(255);

//Como alterar uma tabela e excluir uma coluna
// ALTER TABLE usuarios DROP COLUMN idade;