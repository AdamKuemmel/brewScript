const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String!
    last_name: String
    email: String
    password: String
    addresses: [Address]
    starter_questions: Questions
  }

  type Questions {
    _id: ID
    coffee_prep: String
    coffee_strength: String
    additions: [String]
    avg_cups: String
    bean_prep: String
  }

  type Address {
    _id: ID
    address1: String
    address2: String
    city: String
    state: String
    postal: Int
  }

  type Product {
    _id: ID
    product_name: String
    item_cost: Int
    category: String
    themes: [String]
  }

  type Order {
    _id: ID
    customer: User
    order_date: String
    fulfilled_date: String
    paid_amount: Int
    rating: Int
    order_items: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String!): User
    users: [User]
    orders: [Order]
    order(orderId: ID!): Order
    userOrders: [Order]
    allProducts: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      address1: String!
      address2: String!
      city: String!
      state: String!
      postal: Int!
      coffee_prep: String
      coffee_strength: String
      avg_cups: String
      additions: String
      bean_prep: String
    ): Auth
  }
`;

module.exports = typeDefs;
