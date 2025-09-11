const mongoose = require('mongoose');
const Category = require('../model/Category');
const Brand = require('../model/Brand');
const { secret } = require('../config/secret');

// Connect to MongoDB using same config as backend
mongoose.connect(secret.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleCategories = [
  {
    parent: 'Thali',
    children: ['Veg Thali', 'Non-Veg Thali', 'Regional Thali', 'Mini Thali', 'Special Thali'],
    foodType: 'mixed',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
    status: 'Show'
  },
  {
    parent: 'Snacks',
    children: ['Samosa', 'Pakora', 'Chat', 'Rolls', 'Sandwiches'],
    foodType: 'veg',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop',
    status: 'Show'
  },
  {
    parent: 'Beverages',
    children: ['Lassi', 'Tea', 'Coffee', 'Fresh Juice', 'Soft Drinks'],
    foodType: 'veg',
    img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop',
    status: 'Show'
  },
  {
    parent: 'Add-ons',
    children: ['Extra Bread', 'Dairy Products', 'Rice Items', 'Drinks & Beverages', 'Sides & Extras', 'Desserts & Sweets', 'Condiments & Pickles', 'Extra Curries'],
    foodType: 'mixed',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
    status: 'Show'
  }
];

const sampleBrands = [
  {
    name: 'Urban Kitchen',
    email: 'contact@urbankitchen.com',
    website: 'www.urbankitchen.com',
    location: 'Mumbai, Maharashtra',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop',
    status: 'active',
    address: 'Shop No 12, Food Street, Bandra West, Mumbai - 400050',
    phone: '+91 98765 43210',
    cuisineType: ['north-indian', 'south-indian', 'gujarati'],
    avgDeliveryTime: 25,
    rating: 4.5,
    deliveryRadius: 5,
    openingHours: {
      monday: { open: '10:00', close: '22:00' },
      tuesday: { open: '10:00', close: '22:00' },
      wednesday: { open: '10:00', close: '22:00' },
      thursday: { open: '10:00', close: '22:00' },
      friday: { open: '10:00', close: '23:00' },
      saturday: { open: '10:00', close: '23:00' },
      sunday: { open: '10:00', close: '22:00' }
    }
  },
  {
    name: 'Gujarat Express',
    email: 'info@gujaratexpress.com',
    website: 'www.gujaratexpress.com',
    location: 'Ahmedabad, Gujarat',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop',
    status: 'active',
    address: '23, Traditional Lane, Satellite, Ahmedabad - 380015',
    phone: '+91 97654 32108',
    cuisineType: ['gujarati', 'north-indian'],
    avgDeliveryTime: 30,
    rating: 4.3,
    deliveryRadius: 8,
    openingHours: {
      monday: { open: '11:00', close: '21:00' },
      tuesday: { open: '11:00', close: '21:00' },
      wednesday: { open: '11:00', close: '21:00' },
      thursday: { open: '11:00', close: '21:00' },
      friday: { open: '11:00', close: '22:00' },
      saturday: { open: '11:00', close: '22:00' },
      sunday: { open: '11:00', close: '21:00' }
    }
  },
  {
    name: 'South Spice',
    email: 'hello@southspice.com',
    website: 'www.southspice.com',
    location: 'Bangalore, Karnataka',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop',
    status: 'active',
    address: '45, Coconut Avenue, Koramangala, Bangalore - 560095',
    phone: '+91 96543 21076',
    cuisineType: ['south-indian', 'north-indian'],
    avgDeliveryTime: 20,
    rating: 4.7,
    deliveryRadius: 6,
    openingHours: {
      monday: { open: '09:00', close: '22:00' },
      tuesday: { open: '09:00', close: '22:00' },
      wednesday: { open: '09:00', close: '22:00' },
      thursday: { open: '09:00', close: '22:00' },
      friday: { open: '09:00', close: '23:00' },
      saturday: { open: '09:00', close: '23:00' },
      sunday: { open: '09:00', close: '22:00' }
    }
  }
];

async function seedCategoriesAndBrands() {
  try {
    // Clear existing data
    await Category.deleteMany({});
    await Brand.deleteMany({});
    console.log('Cleared existing categories and brands');

    // Insert sample categories
    const categoryResult = await Category.insertMany(sampleCategories);
    console.log(`✅ Successfully inserted ${categoryResult.length} categories:`);
    categoryResult.forEach(cat => {
      console.log(`- ${cat.parent} (${cat.children.length} subcategories)`);
    });

    // Insert sample brands
    const brandResult = await Brand.insertMany(sampleBrands);
    console.log(`\n✅ Successfully inserted ${brandResult.length} brands:`);
    brandResult.forEach(brand => {
      console.log(`- ${brand.name} (${brand.location}) - Rating: ${brand.rating}`);
    });

    console.log('\n🎉 Sample categories and brands created successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding categories and brands:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedCategoriesAndBrands();