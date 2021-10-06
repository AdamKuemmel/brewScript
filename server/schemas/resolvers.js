const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    users: async () => {
      return User.find();
    },
    userOrders: async (parent, args, context) => {
      console.log(context);
      return Order.findAll({ customer: context.user._id });
    },
    // userOrders: async (parent, args, context) => {
    //   return Order.find({ customer: context.id });
    // },
    // user items
    // products by category
    // view all products
    // user previous orders & next orders
  },

  // MUTATIONS
  // login
  Mutation: {
    addUser: async (
      parent,
      {
        first_name,
        last_name,
        email,
        password,
        address1,
        address2,
        city,
        state,
        postal,
      }
    ) => {
      const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        addresses: { address1, address2, city, state, postal },
      });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      // Verfity user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect Credentials.");
      }
      // Verify entered password
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials.");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
  // logout
  // Add order
  // Edit order
  // Delete order
  // Add user
  // Edit user
  // Delete user
};

module.exports = resolvers;
