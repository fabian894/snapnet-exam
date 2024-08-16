import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import Warehouse from '../models/warehouse.model';


const router = express.Router();

// Get all warehouses
router.get('/', authenticate, async (req, res) => {
  const warehouses = await Warehouse.findAll();
  res.json(warehouses);
});

// Get a Warehouse by ID
router.get('/:id', authenticate, async (req, res) => {
  const warehouse = await Warehouse.findByPk(req.params.id);
  if (warehouse) {
    res.json(warehouse);
  } else {
    res.status(404).json({ message: 'Warehouse not found' });
  }
});

// Create a new warehouse
router.post('/', authenticate, async (req, res) => {
  const { name, location, capacity } = req.body;
  const newWarehouse = await Warehouse.create({ name, location, capacity });
  res.status(201).json(newWarehouse);
});

// Update warehouse
router.put('/:id', authenticate, async (req, res) => {
  const warehouse = await Warehouse.findByPk(req.params.id);
  if (warehouse) {
    const { name, description, price } = req.body;
    warehouse.name = name || warehouse.name;
    warehouse.location = description || warehouse.location;
    warehouse.capacity = price || warehouse.capacity;
    await warehouse.save();
    res.json(warehouse);
  } else {
    res.status(404).json({ message: 'warehouse not found' });
  }
});

// Delete a warehouse
router.delete('/:id', authenticate, async (req, res) => {
  const warehouse = await Warehouse.findByPk(req.params.id);
  if (warehouse) {
    await warehouse.destroy();
    res.json({ message: 'Warehouse deleted successfully' });
  } else {
    res.status(404).json({ message: 'warehouse not found' });
  }
});

export default router;