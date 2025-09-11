const mongoose = require('mongoose');
const Product = require('../model/Products');
const Category = require('../model/Category');
const Brand = require('../model/Brand');
const { secret } = require('../config/secret');

// Connect to MongoDB using same config as backend
mongoose.connect(secret.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleAddons = [
  {
    name: 'Extra Roti',
    description: 'Freshly baked wheat roti to complement your thali',
    img: 'https://images.unsplash.com/photo-1619158401669-57c5dc96e68c?w=300&h=200&fit=crop',
    price: 15,
    preparationTime: 5,
    unit: 'piece',
    productType: 'addon-bread',
    sku: 'ADDON-ROTI-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Curd Bowl',
    description: 'Fresh homemade curd to cool down spicy flavors',
    img: 'https://images.unsplash.com/photo-1589985164785-8a70b7ad95d3?w=300&h=200&fit=crop',
    price: 25,
    preparationTime: 5,
    unit: 'bowl',
    productType: 'addon-dairy',
    sku: 'ADDON-CURD-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Jeera Rice',
    description: 'Aromatic cumin-flavored basmati rice',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
    price: 30,
    preparationTime: 8,
    unit: 'bowl',
    productType: 'addon-rice',
    sku: 'ADDON-RICE-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Masala Chhach',
    description: 'Traditional spiced buttermilk drink',
    img: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop',
    price: 35,
    preparationTime: 5,
    unit: 'glass',
    productType: 'addon-drinks',
    sku: 'ADDON-DRINK-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Masala Papad',
    description: 'Crispy papad topped with onions, tomatoes and spices',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
    price: 25,
    preparationTime: 5,
    unit: 'piece',
    productType: 'addon-sides',
    sku: 'ADDON-PAPAD-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Green Salad',
    description: 'Fresh mixed vegetables salad with cucumber, tomato, onion',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
    price: 30,
    preparationTime: 5,
    unit: 'bowl',
    productType: 'addon-sides',
    sku: 'ADDON-SALAD-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Gulab Jamun (2pcs)',
    description: 'Sweet dessert balls soaked in sugar syrup',
    img: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop',
    price: 45,
    preparationTime: 5,
    unit: 'serving',
    productType: 'addon-sweets',
    sku: 'ADDON-SWEET-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Paneer Curry (Extra)',
    description: 'Additional serving of rich cottage cheese curry',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop',
    price: 50,
    preparationTime: 10,
    unit: 'bowl',
    productType: 'addon-curries',
    sku: 'ADDON-CURRY-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Pickle',
    description: 'Traditional Indian pickle to enhance flavors',
    img: 'https://images.unsplash.com/photo-1596817268489-7d1ab6f4c78a?w=300&h=200&fit=crop',
    price: 20,
    preparationTime: 5,
    unit: 'portion',
    productType: 'addon-condiments',
    sku: 'ADDON-PICKLE-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  },
  {
    name: 'Cold Drink (200ml)',
    description: 'Refreshing cold beverage',
    img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
    price: 25,
    preparationTime: 5,
    unit: 'bottle',
    productType: 'addon-drinks',
    sku: 'ADDON-COLDDRINK-001',
    quantity: 100,
    status: 'available',
    foodType: 'veg'
  }
];

async function seedAddons() {
  try {
    // Get the Add-ons category and a brand
    const addonsCategory = await Category.findOne({ parent: 'Add-ons' });
    console.log('Looking for Add-ons category...', addonsCategory);
    const brand = await Brand.findOne();

    if (!addonsCategory) {
      console.log('❌ Add-ons category not found. Please run seedCategories.js first');
      return;
    }

    if (!brand) {
      console.log('❌ No brands found. Please run seedCategories.js first');
      return;
    }

    // Clear existing addon products
    await Product.deleteMany({ 
      $or: [
        { 'category.name': 'Add-ons' },
        { productType: { $regex: /^addon-/ } }
      ]
    });
    console.log('Cleared existing add-on items');

    // Create addon products
    const addonProducts = sampleAddons.map(addon => ({
      ...addon,
      restaurant: {
        name: brand.name,
        id: brand._id
      },
      brand: {
        name: brand.name,
        id: brand._id.toString()
      },
      category: {
        name: addonsCategory.parent,
        id: addonsCategory._id.toString()
      },
      // Set appropriate subcategory based on product type
      children: getSubcategoryFromType(addon.productType),
      parent: addonsCategory.parent,
      imageURLs: [{ img: addon.img }],
      discount: 0,
      tags: getTagsFromType(addon.productType),
      featured: false,
      sellCount: 0
    }));

    const result = await Product.insertMany(addonProducts);
    console.log(`✅ Successfully inserted ${result.length} add-on items:`);
    result.forEach(addon => {
      console.log(`- ${addon.name} (₹${addon.price}) - ${addon.productType}`);
    });

    console.log('\n🎉 Sample add-on items created successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding add-on items:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Helper function to map product type to subcategory
function getSubcategoryFromType(productType) {
  const mapping = {
    'addon-bread': 'Extra Bread',
    'addon-dairy': 'Dairy Products',
    'addon-rice': 'Rice Items',
    'addon-drinks': 'Drinks & Beverages',
    'addon-sides': 'Sides & Extras',
    'addon-sweets': 'Desserts & Sweets',
    'addon-condiments': 'Condiments & Pickles',
    'addon-curries': 'Extra Curries'
  };
  return mapping[productType] || 'Sides & Extras';
}

// Helper function to get tags based on product type
function getTagsFromType(productType) {
  const baseTags = ['addon', 'vegetarian'];
  const typeTags = {
    'addon-bread': ['bread', 'wheat'],
    'addon-dairy': ['dairy', 'cooling'],
    'addon-rice': ['rice', 'aromatic'],
    'addon-drinks': ['beverage', 'refreshing'],
    'addon-sides': ['crispy', 'fresh'],
    'addon-sweets': ['sweet', 'dessert'],
    'addon-condiments': ['spicy', 'traditional'],
    'addon-curries': ['curry', 'rich']
  };
  return [...baseTags, ...(typeTags[productType] || [])];
}

seedAddons();