const Brand = require("../model/Brand");
const Category = require("../model/Category");
const FoodItem = require("../model/Products");

// create foodItem service
exports.createFoodItemService = async (data) => {
  const foodItem = await FoodItem.create(data);
  const { _id: foodItemId, restaurant, category } = foodItem;
  //update Restaurant
  await Brand.updateOne(
    { _id: restaurant.id },
    { $push: { foodItems: foodItemId } }
  );
  //Category 
  await Category.updateOne(
    { _id: category.id },
    { $push: { foodItems: foodItemId } }
  );
  return foodItem;
};

// create all foodItem service
exports.addAllFoodItemService = async (data) => {
  await FoodItem.deleteMany();
  const foodItems = await FoodItem.insertMany(data);
  for (const foodItem of foodItems) {
    await Brand.findByIdAndUpdate(foodItem.restaurant.id, {
      $push: { foodItems: foodItem._id },
    });
    await Category.findByIdAndUpdate(foodItem.category.id, {
      $push: { foodItems: foodItem._id },
    });
  }
  return foodItems;
};

// get foodItem data
exports.getAllFoodItemsService = async () => {
  console.log('Service: Querying database...');
  
  // Use proper Mongoose query method that works in production
  const foodItems = await FoodItem.find({}).populate('restaurant').populate('category');
  console.log('Service: Database returned', foodItems.length, 'items');
  
  // Count by category
  const thaliCount = foodItems.filter(item => item.category?.name === 'Thali').length;
  const addonCount = foodItems.filter(item => item.category?.name === 'Add-ons').length;
  console.log(`Service: Thali items: ${thaliCount}, Add-on items: ${addonCount}`);
  
  console.log('Service: Successfully returning all', foodItems.length, 'items including add-ons');
  
  return foodItems;
};

// get type of foodItem service
exports.getFoodItemTypeService = async (req) => {
  const type = req.params.type;
  const query = req.query;
  let foodItems;
  if (query.new === "true") {
    foodItems = await FoodItem.find({ foodType: type })
      .sort({ createdAt: -1 })
      .limit(8)
      .populate("reviews");
  } else if (query.featured === "true") {
    foodItems = await FoodItem.find({
      foodType: type,
      featured: true,
    }).populate("reviews");
  } else if (query.topSellers === "true") {
    foodItems = await FoodItem.find({ foodType: type })
      .sort({ sellCount: -1 })
      .limit(8)
      .populate("reviews");
  } else {
    foodItems = await FoodItem.find({ foodType: type }).populate("reviews");
  }
  return foodItems;
};

// get offer foodItem service
exports.getOfferTimerFoodItemService = async (query) => {
  const foodItems = await FoodItem.find({
    foodType: query,
    "offerDate.endDate": { $gt: new Date() },
  }).populate("reviews");
  return foodItems;
};

// get popular foodItem service by type
exports.getPopularFoodItemServiceByType = async (type) => {
  const foodItems = await FoodItem.find({ foodType: type })
    .sort({ "reviews.length": -1 })
    .limit(8)
    .populate("reviews");
  return foodItems;
};

exports.getTopRatedFoodItemService = async () => {
  const foodItems = await FoodItem.find({
    reviews: { $exists: true, $ne: [] },
  }).populate("reviews");

  const topRatedFoodItems = foodItems.map((foodItem) => {
    const totalRating = foodItem.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = totalRating / foodItem.reviews.length;

    return {
      ...foodItem.toObject(),
      rating: averageRating,
    };
  });

  topRatedFoodItems.sort((a, b) => b.rating - a.rating);

  return topRatedFoodItems;
};

// get foodItem data
exports.getFoodItemService = async (id) => {
  const foodItem = await FoodItem.findById(id).populate({
    path: "reviews",
    populate: { path: "userId", select: "name email imageURL" },
  });
  return foodItem;
};

// get foodItem data
exports.getRelatedFoodItemService = async (foodItemId) => {
  const currentFoodItem = await FoodItem.findById(foodItemId);

  const relatedFoodItems = await FoodItem.find({
    "category.name": currentFoodItem.category.name,
    _id: { $ne: foodItemId }, // Exclude the current foodItem ID
  });
  return relatedFoodItems;
};

// update a foodItem
exports.updateFoodItemService = async (id, currFoodItem) => {
  // console.log('currFoodItem',currFoodItem)
  const foodItem = await FoodItem.findById(id);
  if (foodItem) {
    foodItem.title = currFoodItem.title;
    foodItem.brand.name = currFoodItem.brand.name;
    foodItem.brand.id = currFoodItem.brand.id;
    foodItem.category.name = currFoodItem.category.name;
    foodItem.category.id = currFoodItem.category.id;
    foodItem.sku = currFoodItem.sku;
    foodItem.img = currFoodItem.img;
    foodItem.slug = currFoodItem.slug;
    foodItem.unit = currFoodItem.unit;
    foodItem.imageURLs = currFoodItem.imageURLs;
    foodItem.tags = currFoodItem.tags;
    foodItem.parent = currFoodItem.parent;
    foodItem.children = currFoodItem.children;
    foodItem.price = currFoodItem.price;
    foodItem.discount = currFoodItem.discount;
    foodItem.quantity = currFoodItem.quantity;
    foodItem.status = currFoodItem.status;
    foodItem.foodType = currFoodItem.foodType;
    foodItem.description = currFoodItem.description;
    foodItem.additionalInformation = currFoodItem.additionalInformation;
    foodItem.offerDate.startDate = currFoodItem.offerDate.startDate;
    foodItem.offerDate.endDate = currFoodItem.offerDate.endDate;

    await foodItem.save();
  }

  return foodItem;
};



// get Reviews FoodItems
exports.getReviewsFoodItems = async () => {
  const result = await FoodItem.find({
    reviews: { $exists: true, $ne: [] },
  })
    .populate({
      path: "reviews",
      populate: { path: "userId", select: "name email imageURL" },
    });

  const foodItems = result.filter(p => p.reviews.length > 0)

  return foodItems;
};

// get Reviews FoodItems
exports.getStockOutFoodItems = async () => {
  const result = await FoodItem.find({ status: "out-of-stock" }).sort({ createdAt: -1 })
  return result;
};

// get Reviews FoodItems
exports.deleteFoodItem = async (id) => {
  const result = await FoodItem.findByIdAndDelete(id)
  return result;
};