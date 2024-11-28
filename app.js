const express = require('express');
const db = require('/backend/config/db');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.send(`The solution is: ${rows[0].solution}`);
    });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});