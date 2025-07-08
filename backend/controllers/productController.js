const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

// Get single product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'المنتج غير موجود' });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// Create new product (admin only)
exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, image, category, countInStock } = req.body;
    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      countInStock,
      user: req.user.id,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    next(err);
  }
};

// Update product (admin only)
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'المنتج غير موجود' });
    const { name, description, price, image, category, countInStock } = req.body;
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.image = image || product.image;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

// Delete product (admin only)
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'المنتج غير موجود' });
    await product.remove();
    res.json({ message: 'تم حذف المنتج' });
  } catch (err) {
    next(err);
  }
}; 