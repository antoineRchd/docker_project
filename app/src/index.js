const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 4743;

// Health Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Data Route
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM test_table';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
