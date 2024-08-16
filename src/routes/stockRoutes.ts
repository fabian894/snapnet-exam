import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import Stock from '../models/stock.model';

const router = express.Router();

// Get all stocks
router.get('/', authenticate, async (req, res) => {
  const stocks = await Stock.findAll();
  res.json(stocks);
});

// Get a Stock by ID
router.get('/:id', authenticate, async (req, res) => {
  const stock = await Stock.findByPk(req.params.id);
  if (stock) {
    res.json(stock);
  } else {
    res.status(404).json({ message: 'Stock not found' });
  }
});

// Create a new stock
router.post('/', authenticate, async (req, res) => {
  const { quantity, productId, warehouseId } = req.body;
  const newStock = await Stock.create({ quantity, productId, warehouseId  });
  res.status(201).json(newStock);
});

// Update a stock
router.put('/:id', authenticate, async (req, res) => {
  const stock = await Stock.findByPk(req.params.id);
  if (stock) {
    const { quantity, productId, warehouseId  } = req.body;
    stock.quantity = quantity || stock.quantity;
    stock.productId = productId || stock.productId;
    stock.warehouseId = warehouseId || stock.warehouseId;
    await stock.save();
    res.json(stock);
  } else {
    res.status(404).json({ message: 'Stock not found' });
  }
});

// Delete a stock
router.delete('/:id', authenticate, async (req, res) => {
  const stock = await Stock.findByPk(req.params.id);
  if (stock) {
    await stock.destroy();
    res.json({ message: 'Stock deleted successfully' });
  } else {
    res.status(404).json({ message: 'Stock not found' });
  }
});

export default router;