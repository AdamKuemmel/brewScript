import React from "react";
import { useQuery } from "@apollo/client";
import MonthlyTheme from "../components/Home/monthlyTheme";
import HowItWorks from "../components/Home/HowItWorks";
import Parallax from "../components/Home/Parallax";
import Parallax2 from "../components/Home/Parallax2";
import About from "../components/Home/About";
import WhatTheySay from "../components/Home/WhatTheySay";

const Home = () => {
  return (
    <>
      <Parallax />
      {/* <MonthlyTheme /> */}
      <HowItWorks />
      <About />

      <WhatTheySay />
    </>
  );
};

export default Home;
