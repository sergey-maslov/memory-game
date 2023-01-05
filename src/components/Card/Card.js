import React from "react";

function Card(props) {
    return (
        <div className="card" key={props.id}>
            <span>{props.name}</span>
            <img src={props.img} alt={props.slug}></img>
        </div>
    )
}

export default Card;