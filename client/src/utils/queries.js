import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      first_name
      last_name
      email
    }
  }
`;

export const QUERY_USER_ORDERS = gql`
  query userOrders {
    userOrders {
      _id
      customer
      order_date
      fultilled_date
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query allProducts {
    allProducts {
      _id
      product_name
    }
  }
`;
