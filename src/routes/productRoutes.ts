import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import Product from '../models/product.model';

const router = express.Router();

// Get all products
router.get('/', authenticate, async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Get a product by ID
router.get('/:id', authenticate, async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Create a new product
router.post('/', authenticate, async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = await Product.create({ name, description, price });
  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', authenticate, async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    const { name, description, price } = req.body;
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    await product.save();
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Delete a product
router.delete('/:id', authenticate, async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router;