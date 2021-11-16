import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import logoCoffee from "../images/logoCoffee.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";

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
    <footer class="center footer mobileFooter ">
      <div class="tabletFooter">
        <img id="footerLogo" src={logoCoffee} alt="brewscriptlogo" />
        <form
          class="formCon"
          name="emailForm"
          action="https://formspree.io/f/xgerbeza"
          method="POST"
          enctype="multipart/form-data"
        >
          <input
            class="contactBox"
            id="contactBox"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            class="contactBox"
            id="contactBox"
            type="email"
            name="_replyto"
            placeholder="Your email"
          />

          <input
            type="submit"
            id="contactBox"
            class="button2"
            value="SIGN ME THE F**K UP"
          />
        </form>

        <h2 class="copyFooter">
          All Materials &copy; 2021 | Site By AK Designs
        </h2>
      </div>
      <div>
        <div id="footerLinkContainer">
          <div class="footerLinks">
            <a href="#" class="footerWords">
              Sign Up
            </a>
            <a href="#" class="footerWords">
              Our Produce
            </a>
            <a href="#" class="footerWords">
              Our Sourcing
            </a>
            <a href="#" class="footerWords">
              About us
            </a>
            <a href="#" class="footerWords">
              Refer Friends
            </a>
            <a href="#" class="footerWords">
              Contact Us
            </a>
          </div>
          <div class="footerLinks">
            <a href="#" class="footerWords">
              Blog
            </a>
            <a href="#" class="footerWords">
              Careers
            </a>
            <a href="#" class="footerWords">
              Press
            </a>
            <a href="#" class="footerWords">
              Accessibility
            </a>
            <a href="#" class="footerWords">
              FAQs
            </a>
            <a href="#" class="footerWords">
              Help Center
            </a>
          </div>
        </div>
        <div id="socialContainer">
          <a href="/home">
            <img class="socials" src={insta} alt="treeLogo" />
          </a>
          <a href="/home">
            <img class="socials" src={facebook} alt="treeLogo" />
          </a>
          <a href="/home">
            <img class="socials" src={youtube} alt="treeLogo" />
          </a>
          <a href="/home">
            <img class="socials" src={twitter} alt="treeLogo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
