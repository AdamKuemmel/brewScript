import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const styles = {
  buttonText: {
    color: "brown",
  },
};

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4 sticky-bottom justify-content-center">
      <div className="container text-center mb-5">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            drop="up"
            variant="secondary"
            style={styles.buttonText}
          >
            Contact
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
              About us
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="https://twitter.com/BrewScript"
              target="_blank"
            >
              Twitter
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="https://www.facebook.com/BrewScript"
              target="_blank"
            >
              Facebook
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="https://www.instagram.com/brewscript/"
              target="_blank"
            >
              Instagram
            </Dropdown.Item>
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
        <h4>&copy; {new Date().getFullYear()} - BrewScript</h4>
      </div>
    </footer>
  );
};

export default Footer;
