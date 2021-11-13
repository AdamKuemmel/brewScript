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
    marginBottom: "6vh",
  },
};

const HowItWorks = () => {
  return (
    <>
      <div style={styles.container} class="howItWorks">
        <img id="how" src={how1} alt="how1" />
        <img id="how" src={how2} alt="how2" />
        <img id="how" src={how3} alt="how3" />

        {/* <div>
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
        </div> */}
      </div>
    </>
  );
};

export default HowItWorks;
