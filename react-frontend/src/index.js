import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import HelloComponent from "./component/HelloComponent";
// import StateFullComponent from "./container/StateFullComponent";
// import YouTubeComp from "./component/YouTubeComp/YouTubeComp";
// import KontenPost from "./container/KontenPost";
import Home from "./Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HelloComponent />);
//root.render(<StateFullComponent />);
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
