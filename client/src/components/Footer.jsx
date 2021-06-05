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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, nulla.
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
                        <Link to="/" onClick={this.scroll}>
                          Home
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/blog" onClick={this.scroll}>
                          Blog
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
                        <Link to="/faculty" onClick={this.scroll}>
                          Faculty
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/team" onClick={this.scroll}>
                          Team
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <Link to="/history" onClick={this.scroll}>
                          History
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
                    Now available in Mobile<span></span>
                  </h5>
                  <p>We also have our very own app</p>
                  <a className="btn button1" href="#." target="_blank">
                    Download Our App
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a
                      href="mailto:info@domain.com"
                      title="glorythemes"
                      className="mail"
                    >
                      info@domain.com
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
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
