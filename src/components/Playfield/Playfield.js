import React from "react";
import Card from "../Card/Card";

function Playfield(props) {

    return (
        <div>
            {props.data.map(item => <Card key={item.id} name={item.name} img={item.images.md} />)}
        </div>
    )
}

export default Playfield;