import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { globe } from "../images/globe.png";
import { world } from "../images/world.png";
import { hardcoreCoffee } from "../images/hardcoreCoffee.png";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#808080",
    justifyContent: "space-around",

    textAlign: "center",
  },
  learnButton: {
    backgroundColor: "#b7631c",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "4vh",
    fontWeight: "bold",
    borderRadius: "15px",
    border: "2px solid black",
  },

  line1: {
    color: "wheat",
    fontFamily: "Creepster",
    fontSize: "6vh",
    marginTop: "8%",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
  },
  line2: {
    color: "wheat",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "5vh",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",

    fontWeight: "bold",
  },
  line3: {
    color: "wheat",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "3vh",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
  },
};

const WhatTheySay = () => {
  return (
    <>
      <div>
        <img id="global" src={globe} alt="how1" />
        <img id="global" src={world} alt="how2" />
        <img id="global" src={hardcoreCoffee} alt="how3" />
      </div>
    </>
  );
};

export default WhatTheySay;
