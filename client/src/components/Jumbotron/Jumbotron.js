import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    // style={{ height: 300, clear: "both", textAlign: "center", color:"red", fontFamily: "Fugaz One"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;