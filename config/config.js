require ('dotenv').config();

var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host : 'localhost',
        port : process.env.sqlPort || 8889,
        user : process.env.user || 'root',
        password : process.env.password,
        database : 'chatFlight_db'
    });
};

connection.connect(function(err){
    if (err) {
        console.log('database err \n\n' +err +'\n\n database error');
    } else {
        console.log ('db is connected');
        return;
    }
});

module.exports = connection;