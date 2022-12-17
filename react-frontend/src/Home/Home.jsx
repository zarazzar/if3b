import React, { Component, Fragment } from "react";
import Store from "../container/Store";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text-danger">API POST</p>
        <hr />
        <Store />
      </div>
    );
  }
}

export default Home;
