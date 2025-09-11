const mongoose = require('mongoose');
const Category = require('./model/Category');
const { secret } = require('./config/secret');

async function debugCategories() {
  try {
    await mongoose.connect(secret.db_url);
    console.log('Connected to database');
    
    const allCategories = await Category.find({});
    console.log('All categories in database:');
    allCategories.forEach(cat => {
      console.log(`- ID: ${cat._id}, parent: "${cat.parent}", children: [${cat.children}]`);
    });
    
    console.log('\nSearching for Add-ons category:');
    const addonsCategory = await Category.findOne({ parent: 'Add-ons' });
    console.log('Found Add-ons category:', addonsCategory);
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

debugCategories();