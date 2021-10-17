import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../images/pumpkin.png";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#808080",
    justifyContent: "space-around",
    marginTop: "5%",
    textAlign: "center",
    marginBottom: "5%",
    marginTop: "10%",
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

const HowItWorks = () => {
  return (
    <>
      <div style={styles.container} id="mobileHIT">
        <div>
          <h1 style={styles.line1}>Step 1:</h1>
          <h1 style={styles.line2}>Sign Up</h1>
          <h1 style={styles.line3}>
            Answer some questions about your coffee habits and what you love
            about coffee.
          </h1>
        </div>
        <div>
          <h1 style={styles.line1}>Step 2:</h1>
          <h1 style={styles.line2}>Pick your Brew</h1>
          <h1 style={styles.line3} class="mobileCont">
            Customize your your box with coffee add-ons, BrewScript swag, and
            different brewing apparatuses.
          </h1>
        </div>
        <div>
          <h1 style={styles.line1}>Step 3:</h1>
          <h1 style={styles.line2}>Coffee is Coming</h1>
          <h1 style={styles.line3}>
            Sit back and wait for your beans imported from all around the world
            to arrive.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
