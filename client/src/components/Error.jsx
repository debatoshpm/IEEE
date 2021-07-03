import React from "react";
import errorImg from "../assets/images/errorImg.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="center margin_bottom_30_all">
                <img className="margin_bottom_30_all" src={errorImg} alt="#" />
              </div>
              <div className="heading text_align_center">
                <h2>OOOPS, THIS PAGE COULD NOT BE FOUND!</h2>
              </div>
              <div className="center">
                <Link className="btn sqaure_bt light_theme_bt" to="/">
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;
