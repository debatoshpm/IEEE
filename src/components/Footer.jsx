import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  scroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    NSEC IEEE<span></span>
                  </h5>
                  <p>
                    IEEE is the world's largest technical professional
                    organization dedicated to advancing technology for the
                    benefit of humanity. IEEE and its members inspire a global
                    community through its highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <a href="/" onClick={this.scroll}>
                          Home
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/about" onClick={this.scroll}>
                          About
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/events" onClick={this.scroll}>
                          Events
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/publication" onClick={this.scroll}>
                          Publications
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/contact" onClick={this.scroll}>
                          Contact Us
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Out Societies<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <Link to="/society1" onClick={this.scroll}>
                          Computer Society
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/society2" onClick={this.scroll}>
                          Computer Intelligence
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/society3" onClick={this.scroll}>
                          Robotics and Automation
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/error" onClick={this.scroll}>
                          Electron Devices
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/error" onClick={this.scroll}>
                          Power Electronics
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/" onClick={this.scroll}>
                          Antennas and Propagation
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box" style={{ marginBottom: "20px" }}>
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a
                      href="mailto:neeladri.chattopadhyay@ieee.org"
                      title="glorythemes"
                      className="mail"
                    >
                      neeladri.chattopadhyay@ieee.org
                    </a>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <i className="fa fa-facebook footer-fa"></i>
                    </li>
                    <li className="">
                      <i className="fa fa-youtube footer-fa"></i>
                    </li>
                    <li className="">
                      <i className="fa fa-linkedin footer-fa"></i>
                    </li>
                    <li className="">
                      <i className="fa fa-twitter footer-fa"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              Made by
              <a href="https://debatoshpm.github.io/"> Debatosh Pal Majumder</a>
              , Neeladri Chattopadhyay, Suprodip Kundu
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
