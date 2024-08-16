import express from 'express';
import sequelize from './config/database';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import warehouseRoutes from './routes/warehouseRoutes';
import stockRoutes from './routes/stockRoutes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/auth', productRoutes);
app.use('/api/auth', warehouseRoutes);
app.use('/api/auth', stockRoutes);


app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    res.send('Database connected and models synced.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Database connection failed.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // http://localhost:3000/
});