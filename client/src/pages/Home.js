import React from "react";
import { useQuery } from "@apollo/client";
import MonthlyTheme from "../components/Home/monthlyTheme";
import HowItWorks from "../components/Home/HowItWorks";

const Home = () => {
  return (
    <>
      <div>
        <MonthlyTheme />
        <HowItWorks />
      </div>
    </>
  );
};

export default Home;
