import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Bean Technique</Nav.Link>
            <Nav.Link href="#pricing">Subscritions</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
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

export default Navbar;
