import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const styles = {
  buttonText: {
    color: "black",
    backgroundColor: "transparent",
    border: "0",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "4vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    marginLeft: "1%",
    marginRight: "3%",
  },
  copyR: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "3vh",
    textAlign: "center",
    color: "black",
  },
};

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer sticky="bottom">
      <div style={styles.container}>
        <Dropdown style={styles.button}>
          <Dropdown.Toggle drop="up" style={styles.buttonText}>
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
            style={styles.buttonText}
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
      </div>
      <h4 style={styles.copyR}>
        &copy; {new Date().getFullYear()} - BrewScript
      </h4>
    </footer>
  );
};

export default Footer;
