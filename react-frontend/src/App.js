import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Konten from "./component/GetKonten";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Konten />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
