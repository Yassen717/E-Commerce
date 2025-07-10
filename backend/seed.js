require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const dummyProducts = [
  {
    name: 'سماعة بلوتوث',
    description: 'سماعة لاسلكية بجودة صوت عالية.',
    price: 250,
    image: 'https://via.placeholder.com/150',
    category: 'الكترونيات',
    countInStock: 20,
  },
  {
    name: 'ساعة ذكية',
    description: 'ساعة ذكية مقاومة للماء.',
    price: 500,
    image: 'https://via.placeholder.com/150',
    category: 'اكسسوارات',
    countInStock: 15,
  },
  {
    name: 'حقيبة ظهر',
    description: 'حقيبة ظهر عصرية للمدرسة أو العمل.',
    price: 120,
    image: 'https://via.placeholder.com/150',
    category: 'حقائب',
    countInStock: 30,
  },
  {
    name: 'قلم حبر فاخر',
    description: 'قلم حبر بتصميم أنيق.',
    price: 35,
    image: 'https://via.placeholder.com/150',
    category: 'قرطاسية',
    countInStock: 50,
  },
  {
    name: 'تيشيرت قطن',
    description: 'تيشيرت مريح 100% قطن.',
    price: 80,
    image: 'https://via.placeholder.com/150',
    category: 'ملابس',
    countInStock: 40,
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