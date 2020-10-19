const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "burger_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected as " + connection.threadId);
});

module.exports = connection;