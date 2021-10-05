const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    users: async () => {
      return User.find();
    },
    // user items
    // products by category
    // view all products
    // user previous orders & next orders
  },

  // MUTATIONS
  // Add order
  // Edit order
  // Delete order
  // Add user
  // Edit user
  // Delete user
};

module.exports = resolvers;
