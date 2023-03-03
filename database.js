const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost', // mysql host adı
    user:'root', // mysql adı
    password:'', // mysql  şifreniz
    database:'' // mysql db adı
});

module.exports = connection.promise();
