import React, { Component } from "react";
import Revolution from "./Revolution";
import "./Home.css";
import benefit1 from "../assets/images/up2date.png";
import benefit2 from "../assets/images/network.png";
import benefit3 from "../assets/images/exchange.png";
import benefit4 from "../assets/images/cv.png";
import events1 from "../assets/images/events1.png";
import events2 from "../assets/images/events2.jpeg";
import events3 from "../assets/images/events3.jpg";
import events4 from "../assets/images/events4.jpg";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import Join from "./Join";
import { Link } from "react-router-dom";

class Home extends Component {
  handleClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById("collapseOne").className =
      "panel-collapse collapse";
    document.getElementById("collapseTwo").className =
      "panel-collapse collapse";
    document.getElementById("collapseThree").className =
      "panel-collapse collapse";
    document.getElementById("collapseFour").className =
      "panel-collapse collapse";
    document.getElementById(id).className = "panel-collapse collapse show";
    e.ariaExpanded = "true";
    document.getElementById("#collapseOne").ariaExpanded = "false";
    document.getElementById("#collapseTwo").ariaExpanded = "false";
    document.getElementById("#collapseThree").ariaExpanded = "false";
    document.getElementById("#collapseFour").ariaExpanded = "false";
    document.getElementById(`#${id}`).ariaExpanded = "true";
  };
  render() {
    return (
      <React.Fragment>
        <Revolution />
        <div className="section p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_center">
                    <h2>Benefits of Joining Us</h2>
                    <p className="large">
                      The main benefit of IEEE membership is connecting with
                      people from around the world, opening our social and
                      cultural possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit1} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">STAY UP-TO-DATE</h4>
                  <p>Stay up to date on the latest technological innovations</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit2} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Amazing Student Network</h4>
                  <p>Meet students around the world</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit3} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">EXCHANGE INFORMATION</h4>
                  <p>
                    Exchange information with people expert in various fields
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30 margin_0">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit4} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Boosts Your CV</h4>
                  <p>Being an Ieee Member you can enhance your CV </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 35 + "px" }}>
              <div className="col-md-8">
                <div className="full margin_bottom_30">
                  <div className="accordion border_circle">
                    <div className="bs-example">
                      <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <p className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                id="#collapseOne"
                                onClick={this.handleClick("collapseOne")}
                                aria-expanded="false"
                                href="/#"
                              >
                                <i className="fa fa-star"></i>
                                STAY UP-TO-DATE
                                <i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Stay up to date on the latest technological
                                innovations with IEEE publications and products
                                (ie IEEE xplore Magiazine).As IEEE is the
                                world's leading resource for technological
                                innovation and professional networking .
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <p className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                id="#collapseTwo"
                                onClick={this.handleClick("collapseTwo")}
                                aria-expanded="false"
                                href="/#"
                              >
                                <i className="fa fa-star"></i>Amazing Student
                                Network
                                <i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Get exposed to lot of talented people in various
                                fields and not just your own. Meet People,
                                organize Events,Publish papers & Gain both
                                Knowledge & Recogniotion, join Special Interest
                                Groups.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <p className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                id="#collapseThree"
                                onClick={this.handleClick("collapseThree")}
                                aria-expanded="false"
                                href="/#"
                              >
                                <i className="fa fa-star"></i>EXCHANGE
                                INFORMATION
                                <i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseThree"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Interact with leaders in your area of expertise.
                                As an IEEE member, you can attend any of more
                                than 300 major IEEE technical conferences and
                                6,000 IEEE meetings.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <p className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                id="#collapseFour"
                                onClick={this.handleClick("collapseFour")}
                                aria-expanded="false"
                                href="/#"
                              >
                                <i className="fa fa-star"></i>
                                Boosts Your CV
                                <i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Being an Ieee Member can turn your recruitment
                                potential into an employment fact an IEEE
                                appreciation Certificate definitely adds a plus
                                point to your CV.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full" style={{ marginTop: 35 + "px" }}>
                  <h3>About Us</h3>
                  <p>
                    IEEE is the world's largest technical professional
                    organization dedicated to advancing technology for the
                    benefit of humanity. IEEE and its members inspire a global
                    community through its highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities.
                  </p>
                  <p>
                    <Link className="btn main_bt" to="/about">
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section p-3 light_silver gross_layout">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="text_align_left">
                    <h2>IEEE Societies</h2>
                    <p className="large">Societies Available in NSEC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">Computer Society</h4>
                        <p>
                          The IEEE Computer Society is the premier source for
                          information, inspiration, and collaboration in
                          computer science and engineering.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">
                          Computer Intelligence
                        </h4>
                        <p>
                          Computational Intelligence (CI) is the theory, design,
                          application and development of biologically and
                          linguistically motivated computational paradigms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">
                          Robotics and Automation
                        </h4>
                        <p>
                          The IEEE Robotics and Automation Society is a
                          professional society of the IEEE that supports the
                          development and the exchange of scientific knowledge
                          in the fields of robotics and automation, including
                          applied and theoretical issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">Electron Devices</h4>
                        <p>
                          To foster professional growth of its members by
                          satisfying their needs for easy access to and exchange
                          of technical information, publishing, education, and
                          technical recognition and enhancing public visibility
                          in the field of Electron Devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">Power Electronics</h4>
                        <p>
                          The Power Electronics Society is one of the fastest
                          growing technical societies of IEEE. For over 20
                          years, PELS has facilitated and guided the development
                          and innovation in power electronics technology.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <h4 className="service-heading">
                          Antennas and Propagation
                        </h4>
                        <p>
                          The field of interest of the APS includes antennas,
                          including analysis, design, development, measurement,
                          and testing, radiation, propagation, and the
                          interaction of electromagnetic waves with discrete and
                          continuous media.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_center">
                    <h2>Past Events</h2>
                    <p className="large">Check out our past events.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                <div className="product_list">
                  <div className="product_img">
                    <img className="img-responsive" src={events4} alt="" />
                  </div>
                  <div className="product_detail_btm">
                    <div className="center">
                      <h4>
                        <a href="it_shop_detail.html">
                          Lorem ipsum dolor sit amet.
                        </a>
                      </h4>
                    </div>
                    <div className="starratin">
                      <div className="center"> Lorem ipsum </div>
                    </div>
                    <div className="product_price">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Similique, explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                <div className="product_list">
                  <div className="product_img">
                    <img className="img-responsive" src={events1} alt="" />
                  </div>
                  <div className="product_detail_btm">
                    <div className="center">
                      <h4>
                        <a href="it_shop_detail.html">
                          Lorem ipsum dolor sit amet.
                        </a>
                      </h4>
                    </div>
                    <div className="starratin">
                      <div className="center"> Lorem ipsum </div>
                    </div>
                    <div className="product_price">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Similique, explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                <div className="product_list">
                  <div className="product_img">
                    <img className="img-responsive" src={events2} alt="" />
                  </div>
                  <div className="product_detail_btm">
                    <div className="center">
                      <h4>
                        <a href="it_shop_detail.html">
                          Lorem ipsum dolor sit amet.
                        </a>
                      </h4>
                    </div>
                    <div className="starratin">
                      <div className="center"> Lorem ipsum </div>
                    </div>
                    <div className="product_price">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Similique, explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                <div className="product_list">
                  <div className="product_img">
                    <img className="img-responsive" src={events3} alt="" />
                  </div>
                  <div className="product_detail_btm">
                    <div className="center">
                      <h4>
                        <a href="it_shop_detail.html">
                          Lorem ipsum dolor sit amet.
                        </a>
                      </h4>
                    </div>
                    <div className="starratin">
                      <div className="center"> Lorem ipsum </div>
                    </div>
                    <div className="product_price">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Similique, explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_left">
                    <h2>News</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img">
                    <img src={news1} alt="#" />
                  </div>
                  <div className="post_time">
                    <p>
                      <i className="fa fa-clock-o"></i> April 16, 2018 ( In
                      Maintenance )
                    </p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur quam justo,
                      pretium adipiscing elit. Vestibulum quam justo, pretium eu
                      tempus ut, ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img">
                    <img src={news2} alt="#" />
                  </div>
                  <div className="post_time">
                    <p>
                      <i className="fa fa-clock-o"></i> April 16, 2018 ( In
                      Maintenance )
                    </p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur quam justo,
                      pretium adipiscing elit. Vestibulum quam justo, pretium eu
                      tempus ut, ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img">
                    <img src={news3} alt="#" />
                  </div>
                  <div className="post_time">
                    <p>
                      <i className="fa fa-clock-o"></i> April 16, 2018 ( In
                      Maintenance )
                    </p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur quam justo,
                      pretium adipiscing elit. Vestibulum quam justo, pretium eu
                      tempus ut, ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Join />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Home;
