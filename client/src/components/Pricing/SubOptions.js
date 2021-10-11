import React from "react";
import { useQuery } from "@apollo/client";
import halloweenbat from "../images/halloweenbat.png";

const styles = {
  img4: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};

const SubOptions = () => {
  return (
    <>
      <h1>Under Construction</h1>

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
      <img
        src={halloweenbat}
        // onClick={() => handlePageChange("Home")}
        style={styles.img4}
      />
    </>
  );
};

export default SubOptions;
