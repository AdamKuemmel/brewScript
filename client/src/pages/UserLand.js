import React from "react";
import { useQuery } from "@apollo/client";

import AddOn from "../components/UserLand/AddOn";
import Review from "../components/UserLand/Review";

const UserLand = () => {
  return (
    <main>
      <Review />
      <AddOn />
    </main>
  );
};

export default UserLand;
