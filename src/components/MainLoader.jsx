import React, { Component } from "react";
import loader from "../assets/images/loader.png";

class MainLoader extends Component {
  state = {};
  render() {
    return (
      <div className="bg_load">
        <img className="loader_animation" src={loader} alt="#" />
      </div>
    );
  }
}

export default MainLoader;
