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
import { useReducer, useState } from "react";

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

function shuffleArray(array) { // funzione che riordina in modo casuale l'array
  const shuffledArray = array.slice(); //copia array
  const randomComparison = () => Math.random() - 0.5; //restituisce un numero casuale tra -0.5 e 0.5
  shuffledArray.sort(randomComparison); // riordina facendo un confronto con lalori casuali forniti dalla funzione precedente
  return shuffledArray;
}

const deck = shuffleArray(config);
const middleIndex = Math.floor(deck?.length / 2);
const firstHalf = deck?.slice(0, middleIndex);
const secondHalf = shuffleArray(firstHalf);

const decks = {
  one: firstHalf,
  two: secondHalf,
  latestChoise: 0, // valore che mi occore per tenere traccia dell'ultima carta selezionata nel mazzo 1
};

const limitTurns = 6;

function MemoryGame(p) {
  const [counter, setCounter] = useState(null);
  const [clickAlternate, setClickAlternate] = useState(false);
  const [countMatched, setCountMatched] = useState(firstHalf.length)

  const [cards, setCards] = useReducer((state, action) => {
    switch (action.type) {
      case "one":
        setClickAlternate(true);
        //const card1 = state.one?.filter((el)=> el.id === action.cardId)
        const deck1 = state?.one.map((el) => {
          //cerco la carta cliccata e modifico la spunta in true
          if (el.id === action.cardId) {
            return { ...el, isMatched: true };
          }
          return el;
        });
        console.log(deck1);
        return { ...state, one: [...deck1], latestChoise: action.cardId }; // restituisco la modifica del mazzo1 relativa alla spunta true della carta cliccata
      case "two":
        setClickAlternate(false);
        const card1 = state.one?.filter((el) => el.id === action.cardId)[0]; // prendo la carta nel mazzo uno che ha lo stesso id della carta del mazzo due
        let deck2;
        if (card1.isMatched) {
          setCountMatched((prev)=> --prev) // se entro allora la carte e' stata trovata, quindi diminuisco di una unita partendo dalla lunghezza dell'array, fino a 0
          deck2 = state.two?.map((el) => { // cerco la carda con lo stesso id e spunto in true il valore isMatched
            if (el.id === action.cardId) {
              return { ...el, isMatched: true };
            }
            return el;
          });
          //const card2 = deck2?.filter((el) => el.id === action.cardId)[0]; // prendo la carta del mazzo due che risulta metchata nel mazzo due gia con spunta true
          return { ...state, two: [...deck2], latestChoise: 0 };
        } else {// se entro qui vuol dire che la carta non e' stata abbinata
          setCounter((prev) => --prev); // diminusco il numero di tentativi
          const deck1 = state?.one.map((el) => {
            //cerco la carta cliccata nel mazzo 1  e modifico la spunta in false
            if (el.id === state.latestChoise) {
              return { ...el, isMatched: false };
            }
            return el;
          });
          return { ...state, one: [...deck1], latestChoise: 0 }; // ritorno il mazzo 1 al momento del tentativo precedente
        }
      case "reload":
        setCounter(limitTurns); // ripristino i valori di partenza
        //setCountMatched(firstHalf.length)// ripristino i valori di partenza
        const deck = shuffleArray(config);
        const middleIndex = Math.floor(deck?.length / 2);
        const fHalf = deck?.slice(0, middleIndex);
        const sHalf = shuffleArray(fHalf);
        setCountMatched(fHalf.length)// ripristino i valori di partenza
        return {
          one: fHalf,
          two: sHalf,
          latesetChoise: 0,
        }; // ripristino i valori di partenza
      case "start":
        setCounter(limitTurns); // inizio il gioco dando il valore di partenza a Counter 

        return { ...state };
    }
  }, decks);

  return (
    <>
      <Header />
      <div className={`h-[650px] py-4 ${!counter && "hidden"} bg-sky-200`}>
        <div className="grid grid-cols-12 gap-2 mb-3 justify-center">
          {cards?.one.map((el) => (
            <div className="col-span-2 flex justify-center" key={el.description}>
              <Card
                card={el}
                backside={backSide}
                getCard={setCards}
                deck={"one"}
                alternate={clickAlternate}
              />
            </div>
          ))}
        </div>
        <div className="h-5 bg-sky-300 grid"></div>
        <div className="grid grid-cols-12 gap-2 mt-3">
          {cards?.two.map((el) => (
            <div className="col-span-2 flex justify-center" key={el.description}>
              <Card
                card={el}
                backside={backSide}
                getCard={setCards}
                deck={"two"}
                alternate={clickAlternate}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-sky-300 flex flex-row justify-around items-center py-2">
        {counter === null && (
          <button
          className="p-2 w-40 rounded-md bg-sky-800 text-white text-2xl italic"
            onClick={() => {
              setCards({ type: "start" });
            }}
          >
            Start...
          </button>
        )}
        {counter !== null && counter > 0 && countMatched != 0 && (
          <>
            <div className=" text-sky-950 text-2xl font-medium">{`Tentativi ancora rimasti: ${counter}`}</div>
            <div>
              <button
                className="bg-red-500 text-center w-24 text-lg font-semibold p-2 border rounded-lg"
                onClick={() =>
                  setCards({
                    type: "reload",
                  })
                }
              >
                Riprova
              </button>
            </div>
          </>
        )}
        {counter == 0 && (
          <button
          className="bg-sky-800 w-48  text-center text-2xl text-white font-semibold p-2 border rounded-lg"
          onClick={() =>
            setCards({
              type: "reload",
            })
          }
        >
          Hai Fallito!!!! 
          <br></br>
          Riprova...
        </button>
        )}
        {countMatched ===0 &&(
          <button
          className="bg-green-700 w-58  text-center text-2xl text-white font-semibold p-2 border rounded-lg"
          onClick={() =>
            setCards({
              type: "reload",
            })
          }
        >
          Hai Vinto!!!! 
          <br></br>
          Un altra partita...
        </button>
        )}
      </div>
    </>
  );
}

export default MemoryGame;
