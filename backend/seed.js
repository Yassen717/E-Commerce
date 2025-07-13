require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const dummyProducts = [
  // All products in English, prices in EUR
  {
    name: 'Bluetooth Headphones',
    description: 'Wireless Bluetooth headphones with high-quality sound.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
    category: 'Electronics',
    countInStock: 20,
  },
  {
    name: 'Smart Watch',
    description: 'Water-resistant smart watch with fitness tracking.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
    category: 'Accessories',
    countInStock: 15,
  },
  {
    name: 'Backpack',
    description: 'Trendy backpack for school or work.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'Bags',
    countInStock: 30,
  },
  {
    name: 'Luxury Ink Pen',
    description: 'Elegant design luxury ink pen.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    category: 'Stationery',
    countInStock: 50,
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    category: 'Clothing',
    countInStock: 40,
  },
  // English products (new)
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
    category: 'Electronics',
    countInStock: 20,
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with timer and grinder.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Home Appliances',
    countInStock: 10,
  },
  {
    name: 'Gaming Mouse',
    description: 'Ergonomic gaming mouse with customizable buttons.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    category: 'Electronics',
    countInStock: 25,
  },
  {
    name: 'Office Chair',
    description: 'Comfortable office chair with lumbar support.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d',
    category: 'Furniture',
    countInStock: 12,
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    category: 'Electronics',
    countInStock: 18,
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes for men and women.',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    category: 'Footwear',
    countInStock: 30,
  },
  {
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    category: 'Home Decor',
    countInStock: 17,
  },
  {
    name: 'Water Bottle',
    description: 'Stainless steel water bottle, 1L.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1526178613658-3f1622045557',
    category: 'Accessories',
    countInStock: 40,
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for all exercises.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    category: 'Sports',
    countInStock: 28,
  },
];

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  // Create admin user if not exists
  let admin = await User.findOne({ email: 'admin@demo.com' });
  if (!admin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    admin = await User.create({
      name: 'Admin',
      email: 'admin@demo.com',
      password: hashedPassword,
      isAdmin: true,
    });
    console.log('Created dummy admin user: admin@demo.com / admin123');
  }

  // Remove old products
  await Product.deleteMany();
  // Insert dummy products
  const productsWithUser = dummyProducts.map(p => ({ ...p, user: admin._id }));
  await Product.insertMany(productsWithUser);
  console.log('Inserted dummy products');

  mongoose.disconnect();
}

seed(); 