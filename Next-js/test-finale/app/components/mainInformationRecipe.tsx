import { type } from 'os';
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { memo } from 'react';
import { Recipe_main } from '../lib/definitions';


function MainInformationRecipe({setSendRecipe, values = null} : {setSendRecipe: any, values: Recipe_main[]| null}) {

  const formRef = useRef<HTMLFormElement>(null);

  const [mainInformation, setMainInformation] = useState<Recipe_main[]>([])
  const [disableImputs, setDisableImputs] = useState<boolean>(false)
  const [checkEnter, setCheckEnter] = useState<boolean>(false) 


  useEffect(()=>{
    if (values) {
        console.log("vedimi nella mdifya ingredients", values)
        setMainInformation(values)  
    }

    console.log("vedimi nella mdifya ingredients2", values) 
}, [values])

  function handleInputs(e: any) {
    e.preventDefault()
    const name = e.currentTarget.elements.recipe.value
    const persons = e.currentTarget.elements.persons.value
    const url = e.currentTarget.elements.recipe_image.value

    const items: Recipe_main = {
      name: name,
      persons: parseInt(persons),
      url: url
    }
    console.log("vedi qui", items);

    setMainInformation(prev => [...prev, items])
    formRef.current?.reset();
    setDisableImputs(true)
  }

  function deleteItem(i: number) {
    setMainInformation(mainInformation.filter((el, index) => i !== index))
  }

  function sendData() {
    setDisableImputs(true)
    console.log("pronto per invio", mainInformation);
    setSendRecipe({
      type: "main", 
      payload: mainInformation
    })
    setCheckEnter(true)
    
}

function setDefault() {
  setDisableImputs(false)
  setCheckEnter(false)
  setMainInformation([])
}
  return (
    <div className='text-gray-200 flex flex-col gap-1 '>
      <h2 className="text-2xl text-right font-bold m-4">Scheda Ricetta</h2>
      <div className='bg-slate-700 flex flex-row gap-2 p-4'>
        <div className="w-1/2">
          <div className='flex gap-2'>
            <h2 className="text-xl font-semibold mb-2">Informazioni generali</h2>
            {disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={setDefault}>modifica</button>}
          </div>
          <div>
            <ul>
              {mainInformation.map((items, i) => (
                <div key={i + 'main information'} className="mb-1">{`Ricetta: ${items.name}, per ${items.persons} persone`} {!disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={() => deleteItem(i)}>X</button>}</div>
              ))}
            </ul>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleInputs} className='bg-gray-900 flex flex-col p-4 border rounded-xl' action="">
          <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='recipe'>
            Nome ricetta:
            <input type='text' id='recipe' disabled={disableImputs} name='recipe' required className="  border rounded px-2 py-1" />
          </label>
          <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='persons'>
            Per numero persone:
            <input type='number' disabled={disableImputs} min={1} max={12} id='persons' name='persons' required className="text-gray-900 border rounded px-2 py-1" />
          </label>
          <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='recipe_image'>
            Seleziona url immagine:
            <input type='text' id='recipe_image' disabled={disableImputs} name='recipe_image' required className="text-gray-900 border rounded px-2 py-1" />
          </label>
          {!disableImputs && <button type='submit' disabled={disableImputs} className="bg-blue-800 text-white px-4 py-2 rounded">Aggiungi informazioni</button>}
          {disableImputs && <button type='button' disabled={checkEnter} onClick={sendData} className="bg-blue-800 mt-2 text-white px-4 py-2 rounded">{checkEnter? "Modulo inviato": "Invia dati"}</button>}
        </form>
      </div>
    </div>
  )
}

export default memo(MainInformationRecipe)