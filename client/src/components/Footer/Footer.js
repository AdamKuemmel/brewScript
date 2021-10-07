//import things needed in this file
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

//style keys
const styles = {};

//function to render JSX to browser
const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          drop="up"
          variant="secondary"
        >
          Contact
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            About us
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Twitter</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Facebook</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Instagram</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Youtube</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          drop="up"
          variant="secondary"
        >
          Company
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Our Story
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Team</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Careers</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Blog</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
