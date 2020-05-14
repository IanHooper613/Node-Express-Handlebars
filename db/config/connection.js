const mysql = require('mysql')

let connection

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Beckham8*',
        database: 'burgers_db'
    });
};

connection.connect(function(error) {
    if (error) {
        console.log('error connecting: ' + error.stack);
        return
    }
    console.log('connected ad id ' + connection.threadId);
});


module.exports = connection;