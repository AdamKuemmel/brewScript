import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../images/pumpkin.png";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#808080",

    marginTop: "8%",
  },
  container2: {
    flexDirection: "row",
  },

  img1: {
    maxHeight: "55vh",
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

const MonthlyTheme = () => {
  return (
    <>
      <div style={styles.container} id="container">
        <div style={styles.container2}>
          <h1 style={styles.words}>Do things seem a little spOoOky?</h1>
          <h1 id="words2" class="words2">
            That's because its spooky month here at BrewScript! Your box will be
            filled with all sorts of scares and thrills
          </h1>
          <button href="/pricing" style={styles.learnButton} id="learnButton">
            Click here to learn more
          </button>
        </div>
        <div>
          <img src={pumpkin} style={styles.img1} />
        </div>
      </div>
    </>
  );
};

export default MonthlyTheme;
