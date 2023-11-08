let inizio = performance.now();

import { memo, useCallback, useContext, useState } from "react"

import Es_3_11_context from "./Es_3_11_context";

function RadioInput(params) {

    

    const[check, setCheck] = useState(false)
    const{input, setInput} = useContext(Es_3_11_context)
    const handleCheched= useCallback((choise) => {
            console.log('cheched');
            setCheck(choise)
            setInput({
                type: "radio",
                case: choise
            })
        }, [check])

    return(
        <div className="flex flex-col items-start justify-center text-xl font-medium">
        Selezione per Media voto
        <div className="flex flex-row items-center gap-2">
          <input checked={check === ">"} onChange={()=> handleCheched('>')} className="w-5 h-5" type="radio" id=">=6" name=">=6" value=">=6" />
          <label className=" text-lg" htmlFor=">=6">Maggiore o uguale a 6</label>
        </div>

        <div className="flex flex-row items-center gap-2">
          <input checked={check === "<"} onChange={()=> handleCheched('<')} className="w-5 h-5" type="radio" id="<6" name="<6" value="<6" />
          <label className="text-lg" htmlFor="<6">Minore di 6</label>
        </div>
      </div>
    )
}

export default memo(RadioInput) 

let fine = performance.now();
console.log("performance",(fine - inizio))