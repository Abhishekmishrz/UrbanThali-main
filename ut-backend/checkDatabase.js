const mongoose = require('mongoose');
const Product = require('./model/Products');
const { secret } = require('./config/secret');

async function checkDatabase() {
  try {
    await mongoose.connect(secret.db_url);
    console.log('Connected to database');
    
    const allItems = await Product.find({});
    console.log('Total items in database:', allItems.length);
    
    const thaliItems = allItems.filter(item => 
      item.category?.name?.toLowerCase().includes('thali') || item.thaliType
    );
    console.log('Thali items:', thaliItems.length);
    
    const addonItems = allItems.filter(item => 
      item.category?.name?.toLowerCase() === 'add-ons' ||
      item.productType?.startsWith('addon-') ||
      item.category?.parent?.toLowerCase() === 'add-ons'
    );
    console.log('Add-on items:', addonItems.length);
    
    console.log('\nAdd-on items details:');
    addonItems.forEach(item => {
      console.log(`- ${item.name} (${item.category?.name}) - productType: ${item.productType}`);
    });
    
    console.log('\nAll items by category:');
    const categoryCounts = {};
    allItems.forEach(item => {
      const categoryName = item.category?.name || 'Unknown';
      categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
    });
    console.log(categoryCounts);
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkDatabase();