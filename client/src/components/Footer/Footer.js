//import things needed in this file
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

//style keys
const styles = {};

//function to render JSX to browser
const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}

        <h4>&copy; {new Date().getFullYear()} - BrewScript</h4>
      </div>
    </footer>
  );
};

//export to be used in other files
export default Footer;
