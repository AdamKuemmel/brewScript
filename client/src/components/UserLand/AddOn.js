import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";

const AddOn = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);

  const products = data?.allProducts || [];
  const randomProducts = [];

  if (data?.allProducts) {
    const random = Math.floor(Math.random() * products.length);
    console.log(products[random]);
  }

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => (
          <div>
            <p>{product.product_name}</p>
            <button>Add to my next order!</button>
          </div>
        ))
      )}
      add thigns to you order! more coffeeee? arapatususses???? keychain and
      mug???
    </div>
  );
};

export default AddOn;
