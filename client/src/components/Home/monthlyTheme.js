import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import pumpkin from "../../images/pumpkin.png";

const styles = {
  img: {
    maxHeight: "13vh",
  },
};

const MonthlyTheme = () => {
  return (
    <>
      <img
        src={pumpkin}
        // onClick={() => handlePageChange("Home")}
        style={styles.img}
      />
      <h1>
        Do things seem a little spOoOky? Thats beacause its spooky month here at
        BrewScript! Your box will be filled with all sorts of scares and
        thrills!
      </h1>
    </>
  );
};

export default MonthlyTheme;
