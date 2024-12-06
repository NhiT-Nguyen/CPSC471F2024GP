const express = require('express');
const cors = require('cors')
const db = require('./backend/config/db');
const app = express();
const port = process.env.PORT || 3000;
const blogRoutes = require('./backend/routes/blogRoutes');

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );

app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

module.exports = app;