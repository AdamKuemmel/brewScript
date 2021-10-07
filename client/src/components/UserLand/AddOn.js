import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";

const AddOn = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  // console.log(data);
  return (
    <div>
      add thigns to you order! more coffeeee? arapatususses???? keychain and
      mug???
    </div>
  );
};

export default AddOn;
