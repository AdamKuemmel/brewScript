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
      if (context.user) {
        const dborder = await Order.find({
          customer: context.user._id,
        })
          .populate("customer")
          .populate("order_items");
        console.log(dborder);
        return dborder;
      }
      throw new AuthernticationError("You need to be logged in.");
    },
    // products by category
    // view all products
    allProducts: async () => {
      return Product.find();
    },
  },

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
        coffee_prep,
        coffee_strength,
        avg_cups,
        additions,
        bean_prep,
      }
    ) => {
      console.log(postal);
      const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        addresses: { address1, address2, city, state, postal },
        starter_questions: {
          coffee_prep,
          coffee_strength,
          avg_cups,
          additions,
          bean_prep,
        },
      });

      const products = await Product.find();
      const thisMonthsOrder = [
        products[0]._id,
        products[1]._id,
        products[2]._id,
      ];

      const order = await Order.create({
        customer: user._id,
        order_date: Date.now(),
        order_items: thisMonthsOrder,
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

    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({ _id: context.user._id });
        return user;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    addProduct: async (parent, { orderId, productId }, context) => {
      if (context.user) {
        const order = await Order.findOneAndUpdate(
          { _id: orderId },
          { $push: { order_items: productId } }
        );
        return order;
      }
    },
  },
};

module.exports = resolvers;
