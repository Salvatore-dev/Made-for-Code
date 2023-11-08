import { useContext, useState } from "react";
import Es8Context from "./Es8Context";


const bodybuildingExercises = [
  {
    name: "Panca piana",
    type: "Strength",
    difficulty: 3,
  },
  {
    name: "Curl bicipiti",
    type: "Strength",
    difficulty: 2,
  },
  {
    name: "Corsa veloce",
    type: "Cardio",
    difficulty: 2,
  },
  {
    name: "Crunch addominali",
    type: "Resistenza",
    difficulty: 1,
  },
  {
    name: "Squat",
    type: "Strength",
    difficulty: 3,
  },
  {
    name: "Salto con la corda",
    type: "Cardio",
    difficulty: 2,
  },
  {
    name: "Stacchi da terra",
    type: "Strength",
    difficulty: 3,
  },
  {
    name: "Burpees",
    type: "Cardio",
    difficulty: 3,
  },
  {
    name: "Plank",
    type: "Resistenza",
    difficulty: 1,
  },
  {
    name: "Push-up",
    type: "Strength",
    difficulty: 2,
  },
  {
    name: "Mountain climbers",
    type: "Cardio",
    difficulty: 2,
  },
  {
    name: "Affondi",
    type: "Strength",
    difficulty: 2,
  },
  {
    name: "Trazione alla sbarra",
    type: "Strength",
    difficulty: 3,
  },
  {
    name: "Jumping jacks",
    type: "Cardio",
    difficulty: 1,
  },
  {
    name: "Dips alle parallele",
    type: "Strength",
    difficulty: 2,
  },
  {
    name: "Mountain bike",
    type: "Cardio",
    difficulty: 2,
  },
  {
    name: "Planche",
    type: "Strength",
    difficulty: 3,
  },
  {
    name: "Climbing stairs",
    type: "Cardio",
    difficulty: 2,
  },
  {
    name: "Russian twists",
    type: "Resistenza",
    difficulty: 2,
  },
  {
    name: "Leg press",
    type: "Strength",
    difficulty: 3,
  },
];



export default function ListExercise() {

  const {getStars, setSchedule, setSendSC} = useContext(Es8Context)
  const [input, setImput] = useState([])
  
  function handleSelect(e, el) {
    let check = e.target.checked
    let a= [...input]
    if (check) {
      a.push(el)
      setImput(a)
    } else {
      setImput(a.filter(item => item!= el))
     // console.log(a);
    }
  }

function createSc(params) {
  console.log(input);
  setSchedule(input)
  setSendSC(true)
}

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl text-slate-800 bg-gray-200 p-2 mb-4 rounded-lg">Lista esercizi</h1>
      <div>
        <div className="grid grid-cols-12 grid-row-6 ml-4 mb-3">
          <span className="col-start-3 col-span-2 font-bold">Nome esercizio</span>
          <span className="col-span-2 font-bold">Tipo</span>
          <span className="col-span-2 font-bold">Difficolta</span>
          <span className="col-span-2 font-bold">Inserisci nella Scheda</span>
        </div>
        {bodybuildingExercises.map((el, i) => (
          <div className={`grid grid-cols-12 grid-row-6 ml-4 mb-3 ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} p-2 rounded-lg transition duration-300 hover:bg-gray-400`} key={el.name}>
            <span className="col-span-2">Esercizio n. {i + 1}</span>
            <span className="col-span-2">"{el.name}"</span>
            <span className="col-span-2"> Tipo: "{el.type}"</span>
            <span className="col-span-2"> Difficoltà: {getStars(el.difficulty)}</span>
            <span className="col-span-4 flex flex-row items-center">
              <input className="h-6 w-6 bg-gray-400 mr-2" type="checkbox" onChange={(e)=>handleSelect(e, el)}></input>
              Seleziona
            </span>
          </div>
        ))}
        <div className="ml-4">
          <button className="w-full bg-lime-700 text-center text-3xl rounded-lg hover:bg-lime-500" onClick={createSc}>Crea la scheda</button>
        </div>
      </div>
    </div>
  );
}
