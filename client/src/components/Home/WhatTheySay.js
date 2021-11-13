import React from "react";

import globe from "../images/globe.png";
import world from "../images/world.png";
import hardcoreCoffee from "../images/hardcoreCoffee.png";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#808080",
    justifyContent: "space-around",
    height: "5vh",
    textAlign: "center",
  },
  global: {
    marginBottom: "12vh",
  },
};

const WhatTheySay = () => {
  return (
    <>
      <div id="globalContainer">
        <img id="global" src={globe} alt="how1" />
        <img id="global" src={world} alt="how2" />
        <img
          style={styles.global}
          id="global"
          src={hardcoreCoffee}
          alt="how3"
        />
      </div>
    </>
  );
};

export default WhatTheySay;
