import React, { Component } from "react";
import "Loader1.css";

class Loader1 extends Component {
  state = {};
  render() {
    return (
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default Loader1;
