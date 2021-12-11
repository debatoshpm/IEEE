import React from "react";
import "./Join.css";
import join from "../assets/images/join.png";

const Join = () => {
  return (
    <React.Fragment>
      <div className="container card">
        <div className="row">
          <div className="col-md-5 pt-2 pb-2 join-img">
            <img className="d-block w-100" src={join} alt="" />
          </div>
          <div className="col-md-7 join-txt">
            <div className="card-block">
              <p className="join-hd1">Join Us!</p>
              <p className="join-hd2">Sign up today to get involved in the</p>
              <p className="join-hd3">NSEC IEEE STUDENT BRANCH.</p>
              <br />
              <a
                href="https://www.ieee.org/membership/join/index.html"
                className="btn button1 btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Join;
