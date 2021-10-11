import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../images/pumpkin.png";
import halloweentwitterheader from "../images/halloweentwitterheader.png";
import halloweenbat from "../images/halloweenbat.png";

const styles = {
  a: {
    backgroundImage: "./",
  },
  div: {
    display: "block",
    maxHeight: "18vh",

    marginRight: "50px",
    marginLeft: "50px",
  },
  img1: {
    maxHeight: "18vh",
    paddingTop: "20px",
    marginRight: "80px",
    marginLeft: "80px",
  },
  img2: {
    maxHeight: "18vh",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "20px",
    marginRight: "80px",
    marginLeft: "80px",
    paddingBottom: "24px",
    transform: "scaleX(2)",
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
    fontSize: "45px",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
  },
};

const MonthlyTheme = () => {
  return (
    <>
      <a>
        {/* <body style={{ backgroundImage: `url(${background})` }}> */}
        <div>
          <img
            src={pumpkin}
            // onClick={() => handlePageChange("Home")}
            style={styles.img1}
          />
          <img
            src={halloweentwitterheader}
            // onClick={() => handlePageChange("Home")}
            style={styles.img2}
          />
          <img
            src={pumpkin}
            // onClick={() => handlePageChange("Home")}
            style={styles.img3}
          />
        </div>

        <h1 style={styles.words}>
          Do things seem a little spOoOky? That's because its spooky month here
          at BrewScript! Your box will be filled with all sorts of scares and
          thrills!
        </h1>

        <img
          src={halloweenbat}
          // onClick={() => handlePageChange("Home")}
          style={styles.img4}
        />
        <img
          src={halloweenbat}
          // onClick={() => handlePageChange("Home")}
          style={styles.img4}
        />

        {/* <style>body</style> */}
      </a>
    </>
  );
};

export default MonthlyTheme;
