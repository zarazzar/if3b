import React, { Component} from "react";
import Store from "../container/Store";
import Konten from "../container/Konten";
import KontenPost from "../container/KontenPost";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text-danger">API POST</p>
        <hr />
        <KontenPost/>
        <hr />
        <Konten />

        <hr />

        <Store />

      </div>
    );
  }
}

export default Home;
