import React from "react";

import letsGrind from "../images/letsGrind.png";
import waterTemp from "../images/waterTemp.png";
import syrup from "../images/syrup.png";

const styles = {
  container: {
    backgroundColor: "#1F1F1F",
  },
  title: {
    textAlign: "center",
    padding: "11vh 0",
    color: "#BCB2AA",
  },
};

const Blog = () => {
  return (
    <>
      <div id="blogContainer1">
        <h1 style={styles.title}>Read More About Our Coffee Obsession</h1>
        <div id="blogContainer">
          <img id="blogImage" src={letsGrind} alt="how1" />
          <img id="blogImage" src={waterTemp} alt="how2" />
          <img id="blogImage" src={syrup} alt="how3" />
        </div>
        <button id="blogButton">Read More Blogs</button>
      </div>
    </>
  );
};

export default Blog;
