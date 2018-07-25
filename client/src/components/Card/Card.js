import React from "react";
import "./Card.css";
import { Col, Row, Container } from "../../components/Grid";


export const Card = ({children}) => (

<div className= "card">
 
 
    <div className="page__toggle">
        <label className="btoggle">
            <input className="btoggle__input" type="checkbox"/>
            <span className="btoggle__label">
            <span className="btoggle__text">

            </span>
            </span>
        </label>
    </div> 
    {children}
</div>
)

export default Card;