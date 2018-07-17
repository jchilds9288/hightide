import React from "react";
import "./Text-Water.css";

const TextWater = ({ children }) => (
<div>   
    <div
    className="WaterImage"
    >
    <img src="./imgs/waves.png" alt="waves" width= "100%"/>
    </div>

    <div className= "textArea">
        {children}
    </div>
</div> 
);

export default TextWater;