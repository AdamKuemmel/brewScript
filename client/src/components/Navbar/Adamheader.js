import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import navLogo from "../images/navLogo.png";
import logoCoffee from "../images/logoCoffee.png";
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
      <header>
        <nav class="navbar">
          <article class="logoBox">
            <h1>
              <a href="/home">
                <img class="tree" src={logoCoffee} alt="treeLogo" />
              </a>
            </h1>
          </article>

          <div class="menu">
            <div>
              <div class="menu-wrap">
                <input type="checkbox" class="toggler" />

                <div class="hamburger">
                  <div></div>
                  <ul class="nav-menu">
                    <li>
                      <a class="nav-item" href="/beanForm">
                        Brew Tips
                      </a>
                    </li>
                    <li>
                      <a class="nav-item" href="/pricing">
                        Subscriptions
                      </a>
                    </li>
                    {Auth.loggedIn() ? (
                      <>
                        <Link className="nav-item" to="/me">
                          My Profile
                        </Link>
                        <button className="nav-item" onClick={logout}>
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link className="nav-item" to="/login">
                          Login
                        </Link>
                        <a className="nav-item" href="/signup">
                          Signup
                        </a>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
