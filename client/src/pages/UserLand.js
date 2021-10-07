import React from "react";
import { useQuery } from "@apollo/client";

import AddOn from "../components/UserLand/AddOn";
import Review from "../components/UserLand/Review";

import { QUERY_USER_ORDERS } from "../utils/queries";

import Auth from "../utils/auth";

const UserLand = () => {
  const userId = Auth.getProfile().data._id;
  console.log("This is the userId: " + userId);

  const { loading, data, error } = useQuery(QUERY_USER_ORDERS);
  if (error) {
    console.log(JSON.stringify(error));
  }
  console.log(loading);
  if (data) {
    console.log(data);
  }
  return (
    <main>
      <Review />
      <AddOn />
    </main>
  );
};

export default UserLand;
