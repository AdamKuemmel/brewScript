//import things from other files to be used in this file
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../../images/pumpkin.png";

//style keys
const styles = {
  img: {
    maxHeight: "13vh",
  },
};

//function to return JSX to browser
const MonthlyTheme = () => {
  return (
    <>
      <div>
        <img
          src={pumpkin}
          // onClick={() => handlePageChange("Home")}
          style={styles.img}
        />
        <h1>
          Do things seem a little spOoOky? Thats beacause its spooky month here
          at BrewScript! Your box will be filled with all sorts of scares and
          thrills!
        </h1>
      </div>
      <div>
        <p>
          These deals are scary! get 20% your first box when signing up before
          October 31st
        </p>
      </div>
      <div>
        <p>Step one: take our coffee Questionaire</p>
        <p>Step Two: Select your add-ons</p>
        <p>Step three: Sit back and wait for your first BrewScript to arive!</p>
      </div>
      <div>possible instagram links here??</div>
    </>
  );
};

//export for use in other files
export default MonthlyTheme;
