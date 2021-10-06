import React from "react";
import { useQuery } from "@apollo/client";
import Login from "../components/Login-signup/Login";
import Question from "../components/Login-signup/Question";

const Signup = () => {
  return (
    <main>
      <Login />
      <Question />
    </main>
  );
};

export default Signup;
