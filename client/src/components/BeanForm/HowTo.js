import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import halloweenbat from "../images/halloweenbat.png";
const styles = {
  linkContainer: {
    paddingTop: "10px",
    textAlign: "center",
  },
  link: {
    background: "black",
    color: "orange",
    display: "inline-block",
    padding: "10px",
  },

  img4: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  words: {
    justifyContent: "Center",
    color: "orange",
    fontFamily: "helvetic",
    fontSize: "45px",
    borderStyle: "double black",
    textShadow: "5px 5px 6px black",
  },
};

const HowTo = () => {
  return (
    <>
      <a>
        {/* <body style={{ backgroundImage: `url(${background})` }}> */}

        <img
          src={halloweenbat}
          // onClick={() => handlePageChange("Home")}
          style={styles.img4}
        />
        <div style={styles.linkContainer}>
          <h1 style={styles.words}>
            <a
              style={styles.link}
              href="https://www.youtube.com/watch?v=_44o-lCopNU&t=46s"
              target="_blank"
            >
              How To Brew Chemex Coffee
            </a>

            <br />
            <br />
            <a
              style={styles.link}
              href="https://www.youtube.com/watch?v=st571DYYTR8&t=14s"
              target="_blank"
            >
              The Ultimate French Press Technique
            </a>
            <br />
            <br />
            <a
              style={styles.link}
              href="https://www.youtube.com/watch?v=q8pNmYrAYZI&t=30s"
              target="_blank"
            >
              Brew Guide: Yama Cold Brew Tower
            </a>

            <img
              src={halloweenbat}
              // onClick={() => handlePageChange("Home")}
              style={styles.img4}
            />
          </h1>
        </div>
      </a>
    </>
  );
};

export default HowTo;
