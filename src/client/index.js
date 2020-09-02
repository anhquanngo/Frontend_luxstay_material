import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const containerRender = document.getElementById("app");

containerRender
  ? ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    containerRender
  )
  : console.error("Cannot find container render!!!");
