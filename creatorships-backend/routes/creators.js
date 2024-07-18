const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all creators
router.get('/', (req, res) => {
    db.query('SELECT * FROM creators', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new creator
router.post('/', (req, res) => {
    const { name, email, description } = req.body;
    db.query('INSERT INTO creators (name, email, description) VALUES (?, ?, ?)', [name, email, description], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...req.body });
    });
});

module.exports = router;
