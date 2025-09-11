const express = require('express');
const router = express.Router();
// internal
const foodItemController = require('../controller/foodItem.controller');

// add a food item
router.post('/add', foodItemController.addFoodItem);
// add all food items
router.post('/add-all', foodItemController.addAllFoodItems);
// get all food items
router.get('/all', foodItemController.getAllFoodItems);
// get offer timer food items
router.get('/offer', foodItemController.getOfferTimerFoodItems);
// top rated food items
router.get('/top-rated', foodItemController.getTopRatedFoodItems);
// reviews food items
router.get('/review-food-item', foodItemController.reviewFoodItems);
// get popular food items by type
router.get('/popular/:type', foodItemController.getPopularFoodItemByType);
// get Related Food Items
router.get('/related-food-item/:id', foodItemController.getRelatedFoodItems);
// get Single Food Item
router.get("/single-food-item/:id", foodItemController.getSingleFoodItem);
// unavailable Food Items
router.get("/unavailable", foodItemController.unavailableFoodItems);
// update Single Food Item
router.patch("/edit-food-item/:id", foodItemController.updateFoodItem);
// get Food Items By Type
router.get('/:type', foodItemController.getFoodItemsByType);
// delete Food Item
router.delete('/:id', foodItemController.deleteFoodItem);

module.exports = router;