import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

const onClick = (e) => {
  e.preventDefault();
};

const myFunction = (e) => {
  e.preventDefault();
  var x = document.getElementById("myTopnav");
  if (x.className === "first-ul") {
    x.className += " open";
    x.setAttribute("style", "display: block !important");
    document.getElementById("icon-id").className = "fas fa-chevron-up";
  } else {
    x.className = "first-ul";
    x.setAttribute("style", "display: none !important");
    document.getElementById("icon-id").className = "fas fa-chevron-down";
  }
};

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <header id="default_header" className="header_style_1">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="full">
                <div className="topbar-left">
                  <ul className="list-inline">
                    <li>
                      <span className="topbar-label">
                        <i className="fa  fa-home"></i>
                      </span>
                      <span className="topbar-hightlight">
                        Mauza Ranabhutia, Garia, Kolkata, West Bengal 700152
                      </span>
                    </li>
                    <li>
                      <span className="topbar-label">
                        <i className="fa fa-envelope-o"></i>
                      </span>
                      <span className="topbar-hightlight">
                        <a href="mailto:neeladri.chattopadhyay@ieee.org">
                          neeladri.chattopadhyay@ieee.org
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 right_section_header_top">
              <div className="float-left">
                <div className="social_icon">
                  <ul className="list-inline">
                    <li>
                      <a
                        className="fa fa-facebook"
                        href="https://www.facebook.com/"
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {""}
                      </a>
                    </li>
                    <li>
                      <a
                        className="fa fa-google-plus"
                        href="https://plus.google.com/"
                        title="Google+"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {""}
                      </a>
                    </li>
                    <li>
                      <a
                        className="fa fa-twitter"
                        href="https://twitter.com"
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {""}
                      </a>
                    </li>
                    <li>
                      <a
                        className="fa fa-linkedin"
                        href="https://www.linkedin.com"
                        title="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {""}
                      </a>
                    </li>
                    <li>
                      <a
                        className="fa fa-instagram"
                        href="https://www.instagram.com"
                        title="Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {""}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="float-right">
                <div className="make_appo">
                  <a
                    className="btn white_btn"
                    href="https://www.ieee.org/membership/join/index.html"
                  >
                    Join IEEE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="logo">
                <a className={splitLocation[1] === "" ? "active" : ""} href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="menu_side">
                <div id="navbar_menu">
                  <ul className="first-ul" id="myTopnav">
                    <li className="opening">
                      <a
                        className={splitLocation[1] === "" ? "active" : ""}
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="opening">
                      <Link
                        className={splitLocation[1] === "about" ? "active" : ""}
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="opening">
                      <Link
                        className={
                          splitLocation[1] === "events" ? "active" : ""
                        }
                        to="/events"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="opening">
                      <a href="/#" onClick={onClick}>
                        Societies
                      </a>
                      <ul>
                        <li className="opening2">
                          <Link to="/society1">Computer Society</Link>
                        </li>
                        <li className="opening2">
                          <Link to="/society2">Computer Intelligence</Link>
                        </li>
                        <li className="opening2">
                          <Link to="/society3">Robotics and Automation</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="opening">
                      <Link
                        className={
                          splitLocation[1] === "publication" ? "active" : ""
                        }
                        to="/publication"
                      >
                        Publications
                      </Link>
                    </li>
                    <li className="opening">
                      <Link
                        className={
                          splitLocation[1] === "contact" ? "active" : ""
                        }
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="opening">
                      <Link to="/error">
                        <i
                          className="fa fa-moon-o"
                          style={{ display: "inline" }}
                        ></i>
                        &nbsp; Mode
                      </Link>
                    </li>
                  </ul>
                </div>
                <a href="/#" className="icon" onClick={myFunction}>
                  <i className="fas fa-chevron-down" id="icon-id"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
