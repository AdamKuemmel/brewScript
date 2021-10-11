import React from "react";
import { useQuery } from "@apollo/client";
import halloweenbat from "../images/halloweenbat.png";

const styles = {
  img4: {
    display: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  header: {
    margin: "auto",
    color: "white",
    textAlign: "center",
  },
  subheader: {
    textAlign: "center",
  },
  listitem: {
    color: "white",
  },
};

const SubOptions = () => {
  return (
    <>
      <main className="container row">
        <h1 style={styles.header}>BrewScript Pricing and Options</h1>
        <h5 style={styles.header} className="my-3">
          BrewScript's boxes come in 3 different sizes, depending on how much
          coffee your household drinks! You can always adjust this sizing later
          to better fit your caffine needs. All tiers have the option to add
          additional items to their order each month.
        </h5>

        <section className="container justify-content-around my-5">
          <div className="card col-3 h-100">
            <div className="card-body">
              <h5 className="card-title" style={styles.header}>
                Regular: The Coffee Drip
              </h5>
              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                Designed for 1-2 people.
              </h6>
              <ul className="card-text" style={styles.listitem}>
                <li>1 Regular bag of the monthly themed coffee</li>
                <li>1 Regular box of coffee add-ins</li>
                <li>1 Small bag of sample coffee</li>
                <li>1 Piece of brewScript swag</li>
              </ul>

              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                $21.99 / Month
              </h6>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title" style={styles.header}>
                Large: The Coffee Grind
              </h5>
              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                Designed for 3-5 people.
              </h6>
              <ul className="card-text" style={styles.listitem}>
                <li>1 Large bag of the monthlc themed Coffee</li>
                <li>2 Regular box of coffee add-ins</li>
                <li>1 Piece of brewScript swag</li>
                <li>1 Starter brewing apparatus</li>
              </ul>

              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                $28.99 / Month
              </h6>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title" style={styles.header}>
                Exec: The Coffee Life
              </h5>
              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                Designed for 5-10 people.
              </h6>
              <ul className="card-text" style={styles.listitem}>
                <li>2 Large bags of the monthlc themed Coffee</li>
                <li>3 Regular box of coffee add-ins</li>
                <li>2 Pieces of brewScript swag</li>
                <li>1 Starter brewing apparatus</li>
                <li>Monthy additional coffee samples</li>
              </ul>

              <h6
                className="card-subtitle mb-2 text-muted my-3"
                style={styles.subheader}
              >
                $32.99 / Month
              </h6>
            </div>
          </div>
        </section>

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
      </main>
    </>
  );
};

export default SubOptions;
