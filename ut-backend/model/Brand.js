const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const restaurantSchema = mongoose.Schema({
  logo: {
    type: String,
    required: false,
    validate: [validator.isURL, "Please provide valid url(s)"]
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a restaurant name"],
    maxLength: 100,
    unique: true,
  },
  description: String,
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  website: {
    type: String,
    validate: [validator.isURL, "Please provide a valid url"]
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  phone: {
    type: String,
    required: [true, "Please provide a contact number"]
  },
  cuisineType: [{
    type: String,
    enum: ["north-indian", "south-indian", "gujarati", "punjabi", "rajasthani", "bengali", "maharashtrian", "chinese", "continental"]
  }],
  deliveryRadius: {
    type: Number,
    default: 10,
    min: 1
  },
  avgDeliveryTime: {
    type: Number,
    default: 30,
    min: 15
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  status: {
    type: String,
    enum: ["active", "inactive", "temporarily-closed"],
    default: "active"
  },
  openingHours: {
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String }
  },
  foodItems: [{
    type: ObjectId,
    ref: "FoodItem"
  }],
}, {
  timestamps: true
});

const Brand = mongoose.model("Brand", restaurantSchema);

module.exports = Brand;




