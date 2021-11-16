import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import how1 from "../images/how1.png";
import how2 from "../images/how2.png";
import how3 from "../images/how3.png";

const styles = {
  container: {
    display: "flex",

    justifyContent: "space-around",

    textAlign: "center",
  },
  how: {
    color: "#bcb2aa",
    fontWeight: "700",
    textAlign: "center",
    background: " #1f1f1f",
    padding: "20px",
  },
};

const HowItWorks = () => {
  return (
    <>
      <div class="howItWorks">
        <h2 style={styles.how}>How It Works</h2>
        <div style={styles.container} class="howItWorks">
          <img id="how" src={how1} alt="how1" />
          <img id="how" src={how2} alt="how2" />
          <img id="how" src={how3} alt="how3" />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
