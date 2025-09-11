const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CategorySchema = mongoose.Schema({
  img:{
    type:String,
    required:false,
   },
   parent:{
    type:String,
    required:true,
    trim:true,
    unique:true,
   },
   children:[{type:String}],
   foodType:{
    type:String,
    trim:true,
    required:true,
    lowercase: true,
    enum: ["veg", "non-veg", "vegan", "jain", "mixed"]
   },
   description:{
    type:String,
    required:false,
   },
   foodItems: [{
    type: ObjectId,
    ref: "FoodItem"
  }],
   status: {
    type: String,
    enum: ['Show', 'Hide'],
    default: 'Show',
  },
},{
  timestamps: true
})

const Category = mongoose.model('Category',CategorySchema);
module.exports = Category;