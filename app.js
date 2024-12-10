const express = require('express');
const cors = require('cors')
const db = require('./backend/config/db');
const app = express();
const port = process.env.PORT || 3000;

const blogRoutes = require('./backend/routes/blogRoutes');
const commentRoutes = require('./backend/routes/commentRoutes');
const cartRoutes = require ('./backend/routes/cartRoutes');
const fishingGearRoutes = require ('./backend/routes/fishingGearRoutes');
const fishRoutes = require ('./backend/routes/fishRoutes');
const memberRoutes = require ('./backend/routes/memberRoutes');
const orderRoutes = require ('./backend/routes/orderRoutes');
const reviewRoutes = require ('./backend/routes/reviewRoutes');
const transactionRoutes = require ('./backend/routes/transactionRoutes');

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );

app.use('/blog', blogRoutes);
app.use('/comments', commentRoutes);
app.use('/cart', cartRoutes);
app.use('/gear', fishingGearRoutes);
app.use('/fish', fishRoutes);
app.use('/member', memberRoutes);
app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);
app.use('/transaction', transactionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
 
module.exports = app;