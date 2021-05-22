import React, { Component } from "react";
import Revolution from "./Revolution";
import Home from "./Home";
class HomeMain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Revolution />
        <Home />
      </React.Fragment>
    );
  }
}

export default HomeMain;
