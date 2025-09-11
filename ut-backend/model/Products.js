const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
// schema design
const validator = require("validator");

const foodItemSchema = mongoose.Schema({
  sku: {
    type: String,
    required: false,
  },
  img:{
    type: String,
    required: true,
    validate: [validator.isURL, "Please provide valid url(s)"]
  },
  name: {
    type: String,
    required: [true, "Please provide a name for this food item."],
    trim: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [200, "Name is too large"],
  },
  slug: {
    type: String,
    trim: true,
    required: false,
  },
  unit: {
    type: String,
    required: true,
    default: "plate"
  },
  imageURLs: [{
    img:{
      type: String,
      required: false,
      validate: [validator.isURL, "Please provide valid url(s)"]
    }
  }],
  parent:{
    type:String,
    required:true,
    trim:true,
   },
  children:{
    type:String,
    required:true,
    trim:true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Food item price can't be negative"]
  },
  discount: {
    type: Number,
    min: [0, "Discount can't be negative"],
    default: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Food item quantity can't be negative"]
  },
  restaurant: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "Brand",
      required: true,
    }
  },
  category: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "Category",
      required: true,
    }
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["available", "unavailable", "discontinued"],
      message: "status can't be {VALUE} "
    },
    default: "available",
  },
  reviews: [{type:ObjectId, ref: 'Reviews' }],
  foodType:{
    type:String,
    required: true,
    lowercase: true,
    enum: ["veg", "non-veg", "vegan", "jain"]
  },
  description: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: false
  },
  ingredients: [String],
  nutritionalInfo: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    fiber: Number
  },
  allergens: [String],
  spiceLevel: {
    type: String,
    enum: ["mild", "medium", "spicy", "extra-spicy"],
    default: "mild"
  },
  preparationTime: {
    type: Number,
    required: true,
    min: [5, "Preparation time must be at least 5 minutes"]
  },
  tags: [String],
  thaliType: {
    type: String,
    enum: ["mini", "regular", "large", "family"]
  },
  offerDate:{
    startDate:{
      type:Date
    },
    endDate:{
      type:Date
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
  sellCount: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true,
})


const FoodItem = mongoose.model('FoodItem', foodItemSchema)

module.exports = FoodItem;