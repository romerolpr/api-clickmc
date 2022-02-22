const mysql = require('mysql2');

// Todas as configurações de conexão estão armazenas em variaveis de ambientes, por mais segurança

var conn = mysql.createConnection({
    connectionLimit : 5, // Máximo de 5 conexẽs simultâneas
    // Define a conexão com o banco
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "port": 3306,
});

// Realiza o teste de conexão
conn.connect(error => {
    if (error) throw error;
})

module.exports = conn;