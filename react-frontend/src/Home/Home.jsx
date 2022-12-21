import React, { Component} from "react";
import Store from "../container/Store";
import Konten from "../container/Konten";
import KontenPost from "../container/KontenPost";
import StorePost from "../container/StorePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NavbarComp from "../pages/NavbarComp";

class Home extends Component {

state = {
  showComponent: true
}

  render() {
    return (
      <BrowserRouter>
      {/* <div>
            <p className="text-danger">API POST</p>
            <hr />
          <KontenPost/>
            <hr />
            <hr />
            <br />
            <StorePost/>
            <br />
       </div> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/store" element={<StorePost/>}/>
        <Route path="/navbar" element={<NavbarComp/>}/>
        
      </Routes>
      

      </BrowserRouter>


      
    );
  }
}

export default Home;
