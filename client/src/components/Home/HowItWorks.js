import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../images/pumpkin.png";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#808080",
    justifyContent: "space-around",
    marginTop: "5%",
  },
  container2: {},

  img1: {
    maxHeight: "70vh",
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

  words: {
    color: "wheat",
    fontFamily: "Creepster",
    fontSize: "6vh",
    marginTop: "8%",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
    marginRight: "15%",
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

const HowItWorks = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.container2}>
          <h1>Step 1:</h1>
          <h1>Sign Up</h1>
          <h1>
            Answer some questions about your coffee habits and what you love
            about coffee.
          </h1>
        </div>
        <div style={styles.container2}>
          <h1>Step 2:</h1>
          <h1>hello!</h1>
          <h1>hello!</h1>
        </div>
        <div style={styles.container2}>
          <h1>Step 3:</h1>
          <h1>hello!</h1>
          <h1>hello!</h1>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
