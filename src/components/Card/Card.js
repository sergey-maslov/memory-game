import React from "react";

function Card(props) {
    return (
        <div className="card">
            <span>{props.name}</span>
            <img src={props.img} alt={props.alt}></img>
        </div>
    )
}

export default Card;