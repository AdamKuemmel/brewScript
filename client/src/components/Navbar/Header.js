import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import navLogo from "../images/navLogo.png";

const styles = {
  img: {
    maxHeight: "9vh",
  },
  buttons: {
    alignSelf: "end",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "4vh",
    float: "right",
  },
  navContainer: {
    backgroundColor: "#808080",
  },
  buttonContainer: {
    float: "right",
    backgroundColor: "#808080",
  },
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace("/home");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        style={styles.navContainer}
      >
        <Container id="buttonCon">
          <Navbar.Brand href="/home">
            <img
              src={process.env.PUBLIC_URL + navLogo}
              href="/home"
              style={styles.img}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="colCon">
            <Nav style={styles.buttons} id="navbar-nav">
              <Nav.Link href="/beanForm">Bean Technique</Nav.Link>
              <Nav.Link href="/pricing">Subscriptions</Nav.Link>

              {Auth.loggedIn() ? (
                <>
                  <Link className="buttonsLog" to="/me">
                    My Profile
                  </Link>
                  <button className="buttonsLog" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="buttonsLog" to="/login">
                    Login
                  </Link>
                  <Link className="buttonsLog" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
