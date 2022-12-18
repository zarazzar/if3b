import React, { Component, Fragment } from "react";
import Store from "../container/Store";
import Konten from "../container/Konten";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text-danger">API POST</p>
        <hr />
        <Konten />

        <hr />

        <Store />
      </div>
    );
  }
}

export default Home;
