import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => {(

<div className= "card">
    <h3>{props.task}</h3>
    <h3>{props.points}</h3>

</div>
)}

export default Card;