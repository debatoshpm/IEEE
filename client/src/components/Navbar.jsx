import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <header id="default_header" className="header_style_1">
        {/* <!-- header top --> */}
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
                          Lorem Ipsum New York, AB 90218
                        </span>
                      </li>
                      <li>
                        <span className="topbar-label">
                          <i className="fa fa-envelope-o"></i>
                        </span>
                        <span className="topbar-hightlight">
                          <a href="mailto:info@yourdomain.com">
                            info@yourdomain.com
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
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-google-plus"
                          href="https://plus.google.com/"
                          title="Google+"
                          target="_blank"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com"
                          title="Twitter"
                          target="_blank"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com"
                          title="LinkedIn"
                          target="_blank"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com"
                          title="Instagram"
                          target="_blank"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="float-right">
                  <div className="make_appo">
                    <a className="btn white_btn" href="#">
                      Join IEEE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end header top --> */}
        {/* <!-- header bottom --> */}
        <div className="header_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                {/* <!-- logo start --> */}
                <div className="logo">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                {/* <!-- logo end --> */}
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                {/* <!-- menu start --> */}
                <div className="menu_side">
                  <div id="navbar_menu">
                    <ul className="first-ul">
                      <li>
                        <a className="active" href="#">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Events</a>
                        <ul>
                          <li>
                            <a href="#">Drop Down 1</a>
                          </li>
                          <li>
                            <a href="#">Drop Down 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Lorem</a>
                        <ul>
                          <li>
                            <a href="#">Drop Down 1</a>
                          </li>
                          <li>
                            <a href="#">Drop Down 2</a>
                          </li>
                          <li>
                            <a href="#">Drop Down 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-moon-o" aria-hidden="true"></i>
                          Mode
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="search_icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#search_bar"
                        >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- menu end --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header bottom end --> */}
      </header>
      // <!-- end header -->
    );
  }
}

export default Navbar;
