const User = require('../models/User');
const Task = require('../models/Task');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

// @desc    Authenticate admin
// @route   POST /admin/login
// @access  Public
const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded admin credentials (for development)
  if (username === 'siva' && password === '12345') {
    // Create a dummy admin user in DB if not exists
    let adminUser = await User.findOne({ email: 'admin@growintel.com' });
    
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Admin',
        email: 'admin@growintel.com',
        phone: '0000000000',
        password: '12345',
        role: 'admin'
      });
    }

    res.json({
      _id: adminUser._id,
      name: adminUser.name,
      email: adminUser.email,
      role: adminUser.role,
      token: generateToken(adminUser._id)
    });
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
};

// @desc    Get all users
// @route   GET /admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Manage user (activate/deactivate/update)
// @route   PUT /admin/users/:id
// @access  Private/Admin
const manageUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (user) {
      user.active = req.body.active !== undefined ? req.body.active : user.active;
      user.role = req.body.role || user.role;
      
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        active: updatedUser.active
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create task for farmers
// @route   POST /admin/tasks
// @access  Private/Admin
const createTask = async (req, res) => {
  try {
    const { title, description, deadline, priority, assignedTo } = req.body;
    
    const task = new Task({
      title,
      description,
      deadline,
      priority,
      createdBy: req.user._id,
      assignedTo: assignedTo || 'all' // 'all' means all farmers
    });

    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all tasks
// @route   GET /admin/tasks
// @access  Private/Admin
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
      .populate('createdBy', 'name email')
      .populate('assignedTo', 'name email');
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Manage products (create/update/delete)
// @route   POST /admin/products
// @route   PUT /admin/products/:id
// @route   DELETE /admin/products/:id
// @access  Private/Admin
const manageProduct = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { name, description, price, category, stock, image } = req.body;
      
      const product = new Product({
        name,
        description,
        price,
        category,
        stock,
        image,
        addedBy: req.user._id
      });

      const createdProduct = await product.save();
      res.status(201).json(createdProduct);
    } 
    else if (req.method === 'PUT') {
      const product = await Product.findById(req.params.id);
      
      if (product) {
        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.category = req.body.category || product.category;
        product.stock = req.body.stock || product.stock;
        product.image = req.body.image || product.image;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    }
    else if (req.method === 'DELETE') {
      const product = await Product.findById(req.params.id);
      
      if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
  adminLogin,
  getUsers,
  manageUser,
  createTask,
  getTasks,
  manageProduct
};