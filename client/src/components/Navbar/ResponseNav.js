import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoCoffee from "../images/logoCoffee.png";
import Auth from "../../utils/auth";

const ResponseNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace("/home");
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <a href="/home">
          <img class="tree" src={logoCoffee} alt="treeLogo" />
        </a>
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul id="navList" className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/beanForm" className="nav-link" onClick={closeMenu}>
            Brew Tips
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link" onClick={closeMenu}>
            Subscriptions
          </Link>
        </li>
        {Auth.loggedIn() ? (
          <>
            {" "}
            <li className="nav-item">
              <Link className="nav-link" to="/me">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <a className="nav-link" href="/signup">
              Signup
            </a>
          </>
        )}
      </ul>
    </nav>
  );
};

export default ResponseNav;
