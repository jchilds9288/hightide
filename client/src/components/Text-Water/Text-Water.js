import React from "react";
import "./Text-Water.css";
import water from "../../imgs/water.png"
import boat from "../../imgs/boat.png"

const TextWater = ({ children }) => (
<div>   
    <div
    className="WaterImage"
    >
    <img src= {water} className="water-box" alt="waves" width= "100%"/>
    </div>
    <div
    className="boatImage"
    >
    <img src= {boat} className="ship" alt="waves"/>
    </div>

    <div className= "textArea">
        {children}
    </div>
</div> 
);

export default TextWater;