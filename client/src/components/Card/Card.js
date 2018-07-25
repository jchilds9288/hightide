import React from "react";
import "./Card.css";
import { Col, Row, Container } from "../../components/Grid";


export const Card = ({children}) => (

<div className= "card">
 
 
    <div class="page__toggle">
        <label class="btoggle">
            <input class="btoggle__input" type="checkbox"/>
            <span class="btoggle__label">
            <span class="btoggle__text">

            </span>
            </span>
        </label>
    </div> 
    {children}
</div>
)

export default Card;