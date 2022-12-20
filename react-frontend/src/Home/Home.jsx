import React, { Component, Fragment } from "react";
import Store from "../container/Store";
import Konten from "../container/Konten";
import KontenPost from "../container/KontenPost";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text-danger">API POST</p>
        <hr />
        <KontenPost />

        <hr />

        <Store />
      </div>
    );
  }
}

export default Home;
