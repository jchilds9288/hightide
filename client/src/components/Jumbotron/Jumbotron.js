import React from "react";
import "./Jumbotron.css";
import birds from "../../imgs/birds.png"

const Jumbotron = ({ children }) => (
  <div
    // style={{ height: 300, clear: "both", textAlign: "center", color:"red", fontFamily: "Fugaz One"}}
    className="jumbotron animate"
  >
    <img src= {birds} className="birds" alt="birds"/>
    {children}
  </div>
    
);

export default Jumbotron;