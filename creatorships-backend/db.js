const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',       // Your database host
    user: 'root',            // Your database user
    password: '12345', // Your database password
    database: 'creatorships_db' // Your database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = db;
