import React from "react";
import Card from "../Card/Card";
import './Playfield.css'

function Playfield(props) {

    return (
        <div className="playfield">
            {props.data.map(item => <Card key={item.id} name={item.name} img={item.images.sm} alt={item.slug} />)}
        </div>
    )
}

export default Playfield;