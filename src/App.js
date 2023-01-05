import React from "react";
import { useState } from "react";
import './App.css';
import Control from './components/Control/Control';
import Playfield from './components/Playfield/Playfield';
import { shuffleArray } from "./functions";

function App() {
  const [cardsData, setcardsData] = useState([]);

  async function fetchDate() {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?_limit=24')
      .then((response) => response.json())
      .then((data) => {
        const shuffledArray = shuffleArray(data);
        setcardsData(shuffledArray);
      })
  }

  React.useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div className='app'>
      <Control />
      <Playfield data={cardsData}/>
    </div>
  )
}

export default App;
