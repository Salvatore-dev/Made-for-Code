import Header from "./components/Header";

import retro from "./cards/Retro.jpg";
import fiveP from "./cards/cinque-picche.jpg";
import tenF from "./cards/dieci-fiori.jpg";
import queenC from "./cards/donna-cuori.jpg";
import queenf from "./cards/donna-fiori.jpg";
import jackF from "./cards/jack-fiori.jpg";
import jackQ from "./cards/jack-quadri.jpg";
import nineC from "./cards/nove-cuori.jpg";
import nineP from "./cards/nove-picche.jpg";
import kingQ from "./cards/re-quadri.jpg";
import sevenQ from "./cards/sette-quadri.jpg";
import threeF from "./cards/tre-fiori.jpg";
import threeQ from "./cards/tre-quadri.jpg";

import Card from "./components/card";
import { useState } from "react";

const config = [
  {
    id: 1,
    url: fiveP,
    description: "Cinque di Picche",
    isMatched: false,
  },
  {
    id: 2,
    url: tenF,
    description: "Dieci di Fiori",
    isMatched: false,
  },
  {
    id: 3,
    url: queenC,
    description: "Donna di Cuori",
    isMatched: false,
  },
  {
    id: 4,
    url: queenf,
    description: "Donna di Fiori",
    isMatched: false,
  },
  {
    id: 5,
    url: jackF,
    description: "Jack di Fiori",
    isMatched: false,
  },
  {
    id: 6,
    url: jackQ,
    description: "Jack di Quadri",
    isMatched: false,
  },
  {
    id: 7,
    url: nineC,
    description: "Nove di Cuori",
    isMatched: false,
  },
  {
    id: 8,
    url: nineP,
    description: "Nove di Picche",
    isMatched: false,
  },
  {
    id: 9,
    url: kingQ,
    description: "Re di Quadri",
    isMatched: false,
  },
  {
    id: 10,
    url: sevenQ,
    description: "Sette di Quadri",
    isMatched: false,
  },
  {
    id: 11,
    url: threeF,
    description: "Tre di Fiori",
    isMatched: false,
  },
  {
    id: 12,
    url: threeQ,
    description: "Tre di Quadri",
    isMatched: false,
  },
];
//const cards = shuffleArray(config);

const backSide = {
  id: 0,
  url: retro,
  description: "dorso della carta",
  isMatched: false,
};

function shuffleArray(array) {
  const shuffledArray = array.slice();
  const randomComparison = () => Math.random() - 0.5;
  shuffledArray.sort(randomComparison);
  return shuffledArray;
}



function MemoryGame(params) {
  const [cards, setCards] = useState(shuffleArray(config));

  const middleIndex = Math.floor(cards?.length / 2);
  const firstHalf = cards?.slice(0, middleIndex);
  const secondHalf = shuffleArray(firstHalf)

  function getCard(card, LABEL) {
    console.log("ho selezionato la card", card, "nel mazzo", LABEL)
    let id1 
    let id2
    switch (LABEL) {
      case 'one':
      id1 = card
        case 'two':
          id2 = card
    }
    console.log(id1===id2);
  }
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-2 justify-center">
        {firstHalf.map((el) => (
          <Card detail={el} backside={backSide} getCard={getCard} mazzo={"one"} />
        ))}
      </div>
      <div className="h-5 bg-purple-500"></div>
      <div className="grid grid-cols-12 gap-2 justify-center">
        {secondHalf.map((el) => (
          <Card detail={el} backside={backSide} getCard={getCard} mazzo={'two'}/>
        ))}
      </div>
    </>
  );
}

export default MemoryGame;
