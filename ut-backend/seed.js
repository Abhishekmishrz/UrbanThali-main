require('dotenv').config();

const connectDB = require('./config/db');

const Brand = require('./model/Brand');
const brandData = require('./utils/brands');

const Category = require('./model/Category');
const categoryData = require('./utils/categories');

const FoodItem = require('./model/Products');
const thaliDataFromJSON = require('./utils/thalis.json');
const addonsDataFromJSON = require('./utils/addons.json');

const Coupon = require('./model/Coupon');
const couponData = require('./utils/coupons');

const Order = require('./model/Order');
const orderData = require('./utils/orders');

const User = require('./model/User');
const userData = require('./utils/users');

const Reviews = require('./model/Review');
const reviewsData = require('./utils/reviews');

const Admin = require('./model/Admin');
const adminData = require('./utils/admin');

const mongoose = require('mongoose');

// Process thali data from JSON to add ObjectIds
const thaliData = thaliDataFromJSON.map(item => ({
  ...item,
  restaurant: {
    ...item.restaurant,
    id: new mongoose.Types.ObjectId()
  },
  category: {
    ...item.category,
    id: new mongoose.Types.ObjectId()
  }
}));

// Process add-ons data to match FoodItem schema
const addonsData = addonsDataFromJSON.map(item => ({
  ...item,
  img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
  imageURLs: [
    {
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    }
  ],
  parent: 'Add-ons',
  children: item.category,
  discount: 0,
  quantity: 100,
  restaurant: {
    name: 'Urban Thali',
    id: new mongoose.Types.ObjectId()
  },
  category: {
    name: 'Add-ons',
    id: new mongoose.Types.ObjectId()
  },
  status: 'available',
  ingredients: [],
  preparationTime: 5,
  spiceLevel: 'mild',
  tags: ['addon', 'extra'],
  featured: false,
  sellCount: 0,
  isAddon: true
}));

connectDB();
const importData = async () => {
  try {
    await Brand.deleteMany();
    await Brand.insertMany(brandData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    // Seed FoodItem (thali and add-ons) data
    await FoodItem.deleteMany({});
    
    // Insert thalis first
    await FoodItem.insertMany(thaliData);
    console.log(`${thaliData.length} thalis inserted`);
    
    // Insert add-ons
    await FoodItem.insertMany(addonsData);
    console.log(`${addonsData.length} add-ons inserted`);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);
    
    await Order.deleteMany();
    await Order.insertMany(orderData);
    
    await User.deleteMany();
    await User.insertMany(userData);
    
    await Reviews.deleteMany();
    await Reviews.insertMany(reviewsData);
    
    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    console.log('data inserted successfully!');
    process.exit();
  } catch (error) {
    console.log('error', error);
    process.exit(1);
  }
};

importData();
