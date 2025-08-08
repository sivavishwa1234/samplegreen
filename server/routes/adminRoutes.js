const express = require('express');
const router = express.Router();
const { adminLogin, getUsers, createTask, getTasks, manageUser, manageProduct } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

// Admin login (special route)
router.post('/login', adminLogin);

// Protected admin routes
router.use(protect);
router.use(admin);

// User management
router.get('/users', getUsers);
router.put('/users/:id', manageUser);

// Task management
router.post('/tasks', createTask);
router.get('/tasks', getTasks);

// Product management
router.post('/products', manageProduct);
router.put('/products/:id', manageProduct);
router.delete('/products/:id', manageProduct);

module.exports = router;