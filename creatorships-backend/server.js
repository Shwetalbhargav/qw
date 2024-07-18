const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const businessesRoute = require('./routes/businesses');
const creatorsRoute = require('./routes/creators');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'creatorships_db'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.use('/api/businesses', businessesRoute);
app.use('/api/creators', creatorsRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
