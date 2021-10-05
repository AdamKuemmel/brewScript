const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const productSchema = new Schema({
  product_name: {
    type: String,
    required: true,
    trim: true,
  },
  item_cost: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: false,
    trim: true,
  },
  themes: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = Product;
