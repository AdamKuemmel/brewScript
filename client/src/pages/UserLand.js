import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import AddOn from "../components/UserLand/AddOn";
import Review from "../components/UserLand/Review";

import { QUERY_USER_ORDERS } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const UserLand = () => {
  const userOrders = useQuery(QUERY_USER_ORDERS);
  if (userOrders.data) {
  }
  const [deleteUser, { data, error }] = useMutation(DELETE_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const { data: stuff } = await deleteUser();
      localStorage.removeItem("id_token");
      window.location.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main>
      <Review />
      <AddOn />
      <button
        onClick={handleDelete}
        className="btn btn-light mt-4"
        href="/home"
      >
        Delete My Account
      </button>
    </main>
  );
};

export default UserLand;
