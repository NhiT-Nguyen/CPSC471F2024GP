const express = require('express');
const db = require('./backend/config/db');
const app = express();
const port = 3000;
const blogRoutes = require('./backend/routes/blogRoutes');

app.use(express.json());

app.use('/blog', blogRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
module.exports = app;