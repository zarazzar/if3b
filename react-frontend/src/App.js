import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Konten from "./container/Konten";
import Home from "./Home/Home";
import LandingPage from "./pages/LandingPage";
import NavbarComp from "./pages/NavbarComp";
import StorePost from "./container/StorePost";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StorePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
