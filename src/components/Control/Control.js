import React from "react";
import './Control.css'
import { useState } from "react";

function Control(props) {
    const[movesCounter, setMovesCounter] = useState(0);

    return (
        <div className="control">
            <button className="control__newGame" onClick={props.fetchDate}>
                New Game
            </button>
            <button className="control__updateImages" onClick={props.fetchDate}>
                Update Images
            </button>
            <span className="control__movesCounter">
                Moves: {movesCounter}
            </span>
            <span className="control__timer">
                Time: {`00:00`}
            </span>
        </div>
    )
}

export default Control;