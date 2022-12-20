import React, { Component} from "react";
import Store from "../container/Store";
import Konten from "../container/Konten";
import KontenPost from "../container/KontenPost";
import StorePost from "../container/StorePost";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text-danger">API POST</p>
        
        <hr />
        <KontenPost/>
        <hr />
        <hr />
        <br />
        <StorePost/>
        <br />
         
      </div>
    );
  }
}

export default Home;
