import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        first_name
        last_name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
    $address1: String!
    $address2: String!
    $city: String!
    $state: String!
    $postal: Int!
    $coffee_prep: String
    $coffee_strength: String
    $avg_cups: String
    $additions: String
    $bean_prep: String
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
      address1: $address1
      address2: $address2
      city: $city
      state: $state
      postal: $postal
      coffee_prep: $coffee_prep
      coffee_strength: $coffee_strength
      avg_cups: $avg_cups
      additions: $additions
      bean_prep: $bean_prep
    ) {
      token
      user {
        _id
        first_name
        last_name
        email
      }
    }
  }
`;
