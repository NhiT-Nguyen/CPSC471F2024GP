const express = require('express');
const db = require('./backend/config/db');
const app = express();
const port = process.env.PORT || 3000;
const blogRoutes = require('./backend/routes/blogRoutes');

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );

app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.get('/blog', (req, res) => {
  res.send('this is the blog page');

})

module.exports = app;