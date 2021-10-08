import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import navLogo from "../images/navLogo.png";

const styles = {
  img: {
    maxHeight: "7vh",
  },
  buttons: {
    alignSelf: "end",
    fontFamily: "'Lora', serif",
    fontSize: "2vh",
  },
  navContainer: {
    display: "flex",
    justifyContent: "spaceBetween",
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
      <Navbar style={styles.navContainer} variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={process.env.PUBLIC_URL + navLogo}
              href="/home"
              style={styles.img}
            />
          </Navbar.Brand>
          <Nav style={styles.buttonContainer}>
            <Nav.Link style={styles.buttons} href="/beanForm">
              Bean Technique
            </Nav.Link>
            <Nav.Link href="/pricing" style={styles.buttons}>
              Subscriptions
            </Nav.Link>

            <div>
              {Auth.loggedIn() ? (
                <>
                  <Link className="btn btn-lg btn-primary m-2" to="/me">
                    My Profile
                  </Link>
                  <button className="btn btn-lg btn-light m-2" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="btn btn-lg btn-primary m-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-lg btn-light m-2" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
