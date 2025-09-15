const thaliData = [
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
    thaliType: 'regular',
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
    thaliType: 'regular',
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
    thaliType: 'regular',
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
    thaliType: 'regular',
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
    thaliType: 'regular',
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
    thaliType: 'mini',
    tags: ['light', 'quick', 'affordable'],
    featured: false,
    sellCount: 67
  },
  {
    img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=300&fit=crop',
    name: 'Premium Gold Thali',
    slug: 'premium-gold-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Premium Thali',
    price: 599,
    discount: 20,
    quantity: 15,
    restaurant: {
      name: 'Royal Feast',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Luxury dining experience with premium ingredients and royal presentation',
    ingredients: ['Basmati Rice', 'Dal Makhani', 'Paneer Tikka', 'Malai Kofta', 'Butter Naan', 'Gulab Jamun', 'Kulfi'],
    preparationTime: 45,
    spiceLevel: 'mild',
    thaliType: 'large',
    tags: ['premium', 'luxury', 'special-occasion'],
    featured: true,
    sellCount: 12
  },
  {
    img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&h=300&fit=crop',
    name: 'Jain Thali',
    slug: 'jain-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Special Diet Thali',
    price: 269,
    discount: 5,
    quantity: 30,
    restaurant: {
      name: 'Pure Veg Kitchen',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'jain',
    description: 'Special Jain thali without onion, garlic, and root vegetables',
    ingredients: ['Rice', 'Jain Dal', 'Seasonal Vegetables', 'Chapati', 'Jain Pickle', 'Sweet'],
    preparationTime: 25,
    spiceLevel: 'mild',
    thaliType: 'regular',
    tags: ['jain', 'no-onion-garlic', 'pure-veg'],
    featured: false,
    sellCount: 18
  },
  {
    img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop',
    name: 'Family Pack Thali',
    slug: 'family-pack-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Family Thali',
    price: 999,
    discount: 25,
    quantity: 10,
    restaurant: {
      name: 'Family Feast',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'veg',
    description: 'Perfect family meal serving 4 people with variety of dishes',
    ingredients: ['Rice', 'Multiple Curries', 'Assorted Breads', 'Raita', 'Salad', 'Papad', 'Desserts'],
    preparationTime: 60,
    spiceLevel: 'medium',
    thaliType: 'family',
    tags: ['family-pack', 'value-meal', 'sharing'],
    featured: true,
    sellCount: 8
  },
  {
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    name: 'Bengali Thali',
    slug: 'bengali-thali',
    unit: 'plate',
    imageURLs: [{
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    }],
    parent: 'Thali',
    children: 'Regional Thali',
    price: 289,
    discount: 10,
    quantity: 25,
    restaurant: {
      name: 'Bengal Flavors',
      id: new mongoose.Types.ObjectId()
    },
    category: {
      name: 'Thali',
      id: new mongoose.Types.ObjectId()
    },
    status: 'available',
    foodType: 'non-veg',
    description: 'Authentic Bengali thali with fish curry, rice, and traditional sweets',
    ingredients: ['Rice', 'Fish Curry', 'Dal', 'Aloo Posto', 'Luchi', 'Chutney', 'Rosogolla'],
    preparationTime: 30,
    spiceLevel: 'medium',
    thaliType: 'regular',
    tags: ['bengali', 'fish', 'authentic'],
    featured: false,
    sellCount: 24
  }
];