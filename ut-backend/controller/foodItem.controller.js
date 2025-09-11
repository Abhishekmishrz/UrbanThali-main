const Brand = require("../model/Brand");
const foodItemServices = require("../services/foodItem.service");
const FoodItem = require("../model/Products");


// add food item
exports.addFoodItem = async (req, res,next) => {
  console.log('food-item--->',req.body);
  try {
    const firstItem = {
      img: req.body.img,
    };
    const imageURLs = [firstItem, ...(req.body.imageURLs || [])];
    const result = await foodItemServices.createFoodItemService({
      ...req.body,
      imageURLs: imageURLs,
    });

    console.log('food-item-result',result)
 
    res.status(200).json({
      success:true,
      status: "success",
      message: "Food item created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};


// add all food items
module.exports.addAllFoodItems = async (req,res,next) => {
  try {
    const result = await foodItemServices.addAllFoodItemService(req.body);
    res.json({
      message:'Food items added successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}

// get all food items
exports.getAllFoodItems = async (req,res,next) => {
  try {
    console.log('Getting all food items...');
    const result = await foodItemServices.getAllFoodItemsService();
    console.log(`Found ${result.length} food items`);
    res.status(200).json({
      success:true,
      data:result,
    })
  } catch (error) {
    console.error('Error in getAllFoodItems:', error);
    next(error)
  }
}

// get all food items by type
module.exports.getFoodItemsByType = async (req,res,next) => {
  try {
    const result = await foodItemServices.getFoodItemTypeService(req);
    res.status(200).json({
      success:true, 
      data:result,
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// get offer food item controller
module.exports.getOfferTimerFoodItems = async (req,res,next) => {
  try {
    const result = await foodItemServices.getOfferTimerFoodItemService(req.query.type);
    res.status(200).json({
      success:true, 
      data:result,
    })
  } catch (error) {
    next(error)
  }
}

// get Popular Food Item By Type
module.exports.getPopularFoodItemByType = async (req,res,next) => {
  try {
    const result = await foodItemServices.getPopularFoodItemServiceByType(req.params.type);
    res.status(200).json({
      success:true, 
      data:result,
    })
  } catch (error) {
    next(error)
  }
}

// get top rated Food Items
module.exports.getTopRatedFoodItems = async (req,res,next) => {
  try {
    const result = await foodItemServices.getTopRatedFoodItemService();
    res.status(200).json({
      success:true, 
      data:result,
    })
  } catch (error) {
    next(error)
  }
}

// getSingleFoodItem
exports.getSingleFoodItem = async (req,res,next) => {
  try {
    const foodItem = await foodItemServices.getFoodItemService(req.params.id)
    res.json(foodItem)
  } catch (error) {
    next(error)
  }
}

// get Related Food Item
exports.getRelatedFoodItems = async (req,res,next) => {
  try {
    const foodItems = await foodItemServices.getRelatedFoodItemService(req.params.id)
    res.status(200).json({
      success:true, 
      data:foodItems,
    })
  } catch (error) {
    next(error)
  }
}

// update food item
exports.updateFoodItem = async (req, res,next) => {
  try {
    const foodItem = await foodItemServices.updateFoodItemService(req.params.id,req.body)
    res.send({ data: foodItem, message: "Food item updated successfully!" });
  } catch (error) {
    next(error)
  }
};

// review food items
exports.reviewFoodItems = async (req, res,next) => {
  try {
    const foodItems = await foodItemServices.getReviewsFoodItems()
    res.status(200).json({
      success:true, 
      data:foodItems,
    })
  } catch (error) {
    next(error)
  }
};

// unavailable food items
exports.unavailableFoodItems = async (req, res,next) => {
  try {
    const foodItems = await foodItemServices.getUnavailableFoodItems();
    res.status(200).json({
      success:true, 
      data:foodItems,
    })
  } catch (error) {
    next(error)
  }
};

// delete food item
exports.deleteFoodItem = async (req, res,next) => {
  try {
    await foodItemServices.deleteFoodItem(req.params.id);
    res.status(200).json({
      message:'Food item deleted successfully'
    })
  } catch (error) {
    next(error)
  }
};

