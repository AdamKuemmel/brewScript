import React from "react";
import { useQuery } from "@apollo/client";
import monthlyTheme from "../components/Home/monthlyTheme";

const Home = () => {
  return (
    <main>
      <monthlyTheme />
    </main>
  );
};

export default Home;
