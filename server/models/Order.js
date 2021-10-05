const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  order_date: {
    type: Date,
    required: true,
  },
  fulfilled_date: {
    type: Date,
    required: true,
  },
  paid_amount: {
    type: Number,
  },
  order_items: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  rating: {
    type: Number,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
