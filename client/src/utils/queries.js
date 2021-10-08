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
      customer {
        first_name
        last_name
      }
      order_date
      fulfilled_date
      paid_amount
      rating
      order_items {
        product_name
        item_cost
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query allProducts {
    allProducts {
      _id
      product_name
      item_cost
      category
    }
  }
`;
