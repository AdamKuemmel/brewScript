import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import frankCoffee from "../images/frankCoffee.png";
import originLogo from "../images/originLogo.png";

const styles = {
  origin: {
    height: "15vh",
    marginTop: "12vh",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    background: "#35203F",
    color: "#BCB2AA",
  },
  thinkPic: {
    width: "50vw",
  },
  p: {
    maxWidth: "90%",
    marginLeft: "10px",
  },
};

const About = () => {
  return (
    <>
      <div id="aboutContainer">
        <div id="aboutText">
          <img src={originLogo} alt="office" id="originPic" />
          <article>
            <div>
              <p style={styles.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eaque dolores atque ipsam pariatur perferendis.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Amet eaque dolores atque
                ipsam pariatur perferendis.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet eaque dolores atque ipsam
                pariatur perferendis.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet eaque dolores atque ipsam pariatur
                perferendis.
              </p>
            </div>
          </article>
        </div>
        <img src={frankCoffee} alt="office" id="frankCoffee" />
      </div>
    </>
  );
};

export default About;
