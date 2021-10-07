import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import pumpkin from "../../images/pumpkin.png";

const styles = {
  navBar: {
    display: "flex",
    backgroundColor: "#0c0c0c",
    justifyContent: "spaceBetween",
  },
  navbarNav: {},
  buttons: {
    // marginLeft: "49%",
    // marginRight: "2%",
    textAlign: "center",
    justifyContent: "end",
    color: "#edf1cf",
  },
  ak: {
    marginLeft: "10%",
  },
  img: {
    maxHeight: "9vh",
  },
  buttonText: {
    color: "#edf1cf",
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
      <Navbar style={styles.navBar} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={pumpkin}
              // onClick={() => handlePageChange("Home")}
              style={styles.img}
            />
          </Navbar.Brand>
          <Nav style={styles.buttons} className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/beanForm">Bean Technique</Nav.Link>
            <Nav.Link href="/pricing">Subscritions</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
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
