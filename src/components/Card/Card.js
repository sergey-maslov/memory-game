import React from "react";
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img className="card__image" src={props.img} alt={props.alt} width='120'></img>
            <span className="card__title">{props.name}</span>
        </div>
    )
}

export default Card;