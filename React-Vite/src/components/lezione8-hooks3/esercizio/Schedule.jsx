import { useContext } from "react";
import Es8Context from "./Es8Context";


function getDifficultSC(array, funx) {
  const sum = array
    .map(item => Number(item.difficulty)) // Estrai solo le difficoltà
    .reduce((acc, el) => acc + el, 0); // Somma le difficoltà
  return funx(Math.round(sum / array.length));
}

export default function Schedule() {

  const {schedule, setSendSC, getStars} = useContext(Es8Context)
  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Scheda d'Allenamento</h2>
        <ul className="list-inside list-decimal space-y-2">
          {schedule.map((el, i)=>(
            <li key={el.name}>{`Esercizio: ${el.name} (${el.type}) - Difficolta ${getStars(el.difficulty)}`}</li>
          ))}
        </ul>
        <p className="text-xl font-semibold mt-4">{`Grado di difficolta scheda: ${getDifficultSC(schedule, getStars)}`}</p>
        
      </div>
      <div className="flex flex-row justify-center mt-3 max-w-lg mx-auto">
        <button className="w-full bg-lime-700 text-center text-2xl rounded-lg hover:bg-lime-500" onClick={()=> setSendSC(false)}>Un Altra</button>
      </div>
    </>
  );
}
