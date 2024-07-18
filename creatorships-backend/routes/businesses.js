const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection

// Get all businesses
router.get('/', (req, res) => {
    db.query('SELECT * FROM businesses', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new business
router.post('/', (req, res) => {
    const { name, email, description } = req.body;
    db.query('INSERT INTO businesses (name, email, description) VALUES (?, ?, ?)', [name, email, description], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...req.body });
    });
});

module.exports = router;
