const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String!
    last_name: String
    email: String
    password: String
    addresses: [Address]
    starter_questions: [Questions]
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
    user: [User]
    order_date: Int
    fulfilled_date: Int
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
  }
`;

module.exports = typeDefs;
