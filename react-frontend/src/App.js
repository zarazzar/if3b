import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Youtube from "./component/YouTubeComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
