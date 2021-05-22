import React, { Component } from "react";
import "./Home.css";
import logo from "../assets/images/logo.png";
import benefit from "../assets/images/benefit.png";
import events1 from "../assets/images/events1.png";
import events2 from "../assets/images/events2.jpeg";
import events3 from "../assets/images/events3.jpg";
import events4 from "../assets/images/events4.jpg";
import join from "../assets/images/join.png";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- section --> */}
        <div className="section padding_layout_1">
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
                                href="#collapseOne"
                              >
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                Benefit 1<i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse in"
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
                                href="#collapseTwo"
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
                                href="#collapseThree"
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
                                href="#collapseFour"
                              >
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                Benefit 4<i className="fa fa-angle-down"></i>
                              </a>
                            </p>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse in"
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
        {/* <!-- end section --> */}
        {/* <!-- section --> */}
        <div className="section padding_layout_1 light_silver gross_layout">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_left">
                    <h2>IEEE Societies</h2>
                    <p className="large">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, in.
                    </p>
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
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 1</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 2</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 3</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 4</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 5</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left">
                          <img src={logo} alt="#" />
                        </div>
                        <h4 className="service-heading">Society 6</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni maxime quasi enim omnis aliquid culpa?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end section --> */}
        {/* <!-- section --> */}
        <div className="section padding_layout_1">
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
        {/* <!-- end section --> */}

        {/* <!-- News Section --> */}
        <div className="section padding_layout_1">
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
        {/* <!-- end section --> */}
        <br />
        <br />
        {/* <!-- Modal --> */}
        <div className="container card">
          <div className="row">
            <div className="col-md-5 pt-2 pb-2 join-img">
              <img className="d-block w-100" src={join} alt="" />
            </div>
            <div className="col-md-7 join-txt">
              <div className="card-block">
                <p className="join-hd1">Let's Join Us!</p>
                <p className="join-hd2">Sign up today to get involved in the</p>
                <p className="join-hd3">NSEC IEEE STUDENT BRANCH.</p>
                <br />
                <a
                  href="https://www.google.com/"
                  className="btn button1 btn-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Model search bar --> */}
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Home;
