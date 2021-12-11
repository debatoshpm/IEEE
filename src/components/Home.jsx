import React, { Component } from "react";
import Revolution from "./Revolution";
import "./Home.css";
import benefit from "../assets/images/benefit.png";
import events1 from "../assets/images/events1.png";
import events2 from "../assets/images/events2.jpeg";
import events3 from "../assets/images/events3.jpg";
import events4 from "../assets/images/events4.jpg";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import Join from "./Join";
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, in.
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
                      <img src={benefit} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Benefit 1</h4>
                  <p>Perspiciatis eos quos totam cum minima aut!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Benefit 2</h4>
                  <p>Perspiciatis eos quos totam cum minima aut!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Benefit 3</h4>
                  <p>Perspiciatis eos quos totam cum minima aut!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30 margin_0">
                  <div className="center">
                    <div className="icon">
                      <img src={benefit} alt="#" />
                    </div>
                  </div>
                  <h4 className="theme_color">Benefit 4</h4>
                  <p>Perspiciatis eos quos totam cum minima aut!</p>
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
                                Benefit 1<i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
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
                                <i className="fa fa-star"></i>Benefit 2
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
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
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
                                <i className="fa fa-star"></i>Benefit 3
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
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
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
                                Benefit 4<i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo..
                  </p>
                  <p>
                    <a className="btn main_bt" href="https://www.google.com/">
                      Read More
                    </a>
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
