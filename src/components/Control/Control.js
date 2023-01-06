import React from "react";
import './Control.css'
import { useState } from "react";

function Control(props) {
    const[movesCounter, setMovesCounter] = useState(0);
    console.log(props.fetchDate);

    return (
        <div className="control">
            <button className="button" onClick={props.fetchDate}>
                New Game
            </button>
            <span className="movesCounter">
                Moves: {movesCounter}
            </span>
            <span className="timer">
                Time: {`00:00`}
            </span>
        </div>
    )
}

export default Control;