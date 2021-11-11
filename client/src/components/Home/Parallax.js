import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../images/pumpkin.png";

const styles = {
  container2: {
    flexDirection: "row",
  },

  learnButton: {
    backgroundColor: "#b7631c",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "4vh",
    fontWeight: "bold",
    borderRadius: "15px",
    border: "2px solid black",
  },

  img3: {
    maxHeight: "18vh",
    paddingTop: "20px",
    maxHeight: "18vh",

    marginRight: "80px",
    marginLeft: "80px",
  },

  img4: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },

  title: {
    color: "wheat",
    fontFamily: "Creepster",
    textAlign: "center",

    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
    background: "transparent",
  },
  words2: {
    color: "wheat",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "45px",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
    marginRight: "15%",
  },
};

const Parallax = () => {
  return (
    <>
      <div className="akHome"></div>
    </>
  );
};

export default Parallax;
