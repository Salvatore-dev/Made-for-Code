import { useState} from "react";
import ListExercise from "./List";
import Schedule from "./Schedule";

function getStars(n) {
    let result =''
    const star = "★ "
    for (let i = 0; i < n; i++) {
      result += star 
    }
    return result
  }
  

import Es8Context from "./Es8Context.jsx";

export default function Esercizio8() {
    const [schedule, setSchedule] = useState([])
    const [sendSC, setSendSC] = useState(false)


  return (
    <>
      <Es8Context.Provider value={{
        schedule, 
        setSchedule, 
        getStars,
        sendSC,
        setSendSC
      }}>
        <header className="bg-gray-200 h-12 text-3xl text-center">
          Esercizio 8
        </header>
        {!sendSC && <ListExercise /> }
        {sendSC && <Schedule />}

        
      </Es8Context.Provider>
    </>
  );
}
