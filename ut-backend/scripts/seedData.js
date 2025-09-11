require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const FoodItem = require('../model/Products');

// Connect to MongoDB using the same connection as the main app
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/urbanthali';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleFoodItems = [
  {
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    name: 'Royal Veg Thali',
    slug: 'royal-veg-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Veg Thali',
    price: 299,
    discount: 10,
    quantity: 50,
    restaurant: {
      name: 'Urban Kitchen',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'A complete vegetarian meal with dal, sabzi, roti, rice, and sweet',
    ingredients: ['Rice', 'Dal', 'Mixed Vegetables', 'Roti', 'Raita', 'Sweet'],
    preparationTime: 25,
    spiceLevel: 'medium',
    tags: ['healthy', 'traditional', 'complete-meal'],
    featured: true,
    sellCount: 45
  },
  {
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    name: 'Special Non-Veg Thali',
    slug: 'special-non-veg-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Non-Veg Thali',
    price: 399,
    discount: 15,
    quantity: 30,
    restaurant: {
      name: 'Urban Kitchen',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'non-veg',
    description: 'Delicious non-vegetarian thali with chicken curry, rice, naan, and more',
    ingredients: ['Chicken Curry', 'Rice', 'Naan', 'Dal', 'Salad', 'Sweet'],
    preparationTime: 35,
    spiceLevel: 'spicy',
    tags: ['protein-rich', 'spicy', 'complete-meal'],
    featured: true,
    sellCount: 38
  },
  {
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    name: 'Gujarati Thali',
    slug: 'gujarati-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Regional Thali',
    price: 249,
    discount: 5,
    quantity: 40,
    restaurant: {
      name: 'Gujarat Express',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Authentic Gujarati thali with dhokla, undhiyu, and traditional sweets',
    ingredients: ['Dhokla', 'Undhiyu', 'Gujarati Dal', 'Rotli', 'Rice', 'Kheer'],
    preparationTime: 30,
    spiceLevel: 'mild',
    tags: ['authentic', 'gujarati', 'traditional'],
    featured: false,
    sellCount: 22
  },
  {
    img: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&fit=crop',
    name: 'South Indian Thali',
    slug: 'south-indian-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Regional Thali',
    price: 279,
    discount: 8,
    quantity: 35,
    restaurant: {
      name: 'South Spice',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Traditional South Indian meal with sambar, rasam, rice, and coconut chutney',
    ingredients: ['Rice', 'Sambar', 'Rasam', 'Coconut Chutney', 'Pickle', 'Papad'],
    preparationTime: 20,
    spiceLevel: 'medium',
    tags: ['south-indian', 'coconut', 'traditional'],
    featured: true,
    sellCount: 31
  },
  {
    img: 'https://images.unsplash.com/photo-1574653909286-d4e8f3b8bb3b?w=400&h=300&fit=crop',
    name: 'Punjabi Thali',
    slug: 'punjabi-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1574653909286-d4e8f3b8bb3b?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Regional Thali',
    price: 329,
    discount: 12,
    quantity: 25,
    restaurant: {
      name: 'Punjab Palace',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Rich Punjabi thali with butter naan, dal makhani, and paneer curry',
    ingredients: ['Butter Naan', 'Dal Makhani', 'Paneer Butter Masala', 'Rice', 'Lassi'],
    preparationTime: 28,
    spiceLevel: 'medium',
    tags: ['punjabi', 'rich', 'butter'],
    featured: false,
    sellCount: 19
  },
  {
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    name: 'Mini Thali',
    slug: 'mini-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Mini Thali',
    price: 159,
    discount: 0,
    quantity: 60,
    restaurant: {
      name: 'Quick Bites',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Perfect portion thali for light appetite with essential items',
    ingredients: ['Rice', 'Dal', 'Sabzi', 'Roti', 'Pickle'],
    preparationTime: 15,
    spiceLevel: 'mild',
    tags: ['light', 'quick', 'affordable'],
    featured: false,
    sellCount: 67
  }
];

async function seedData() {
  try {
    // Clear existing data
    await FoodItem.deleteMany({});
    console.log('Cleared existing food items');

    // Insert sample data
    const result = await FoodItem.insertMany(sampleFoodItems);
    console.log(`✅ Successfully inserted ${result.length} food items:`);
    
    result.forEach(item => {
      console.log(`- ${item.name} (₹${item.price})`);
    });

    console.log('\n🎉 Sample data created successfully!');
    console.log('You can now see these items in both admin panel and user frontend.');
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();