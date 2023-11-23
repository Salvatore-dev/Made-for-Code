"use client"

import React from 'react'
import { useReducer, useState } from 'react'
import Ingredients from './ingredients'
import Steps from './steps'
import MainInformationRecipe from './mainInformationRecipe'
import Link from 'next/link'

import { Recipe } from '../lib/definitions'


function RecipeSchedule() {
  const [confirmPost, setConfirmPost] = useState<boolean>(false)

  const defaultRecipe : Recipe = {
    main : [],
    ingredients : [],
    steps : [],
  }

  const [sendRecipe, setSendRecipe] = useReducer<any>((state, action)=>{
    switch (action.type) {
      case 'main':
        return {
          ...state,
          main: [...action.payload],
        };
      case 'ingredients':
        return {
          ...state,
          ingredients: [...action.payload],
        };
      case 'steps':
        return {
          ...state,
          steps: [...action.payload],
        };
    }
  }, defaultRecipe)

  console.log("vedimi sulla scheda", sendRecipe);

  

  async function sendData() {
    const send = await fetch('/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Indica che stai inviando dati JSON
    },
    body: JSON.stringify(sendRecipe), // Converte l'oggetto in una stringa JSON
  });

  console.log("vedi risultato invio da client",send.ok);
  if (send.ok) {
    setConfirmPost(true)
  }
  
  }
  return (
    <section className=' bg-gray-900'>
      <div className='flex items-end bg-gray-800 justify-center gap-2'>
        <h1 className=' text-center text-2xl font-semibold text-gray-200 my-3'>Crea una nuova scheda</h1>
      </div>
        <MainInformationRecipe setSendRecipe={setSendRecipe} />
        <Ingredients setSendRecipe={setSendRecipe} />
        <Steps setSendRecipe={setSendRecipe}/>
        <div className=' bg-gray-900 flex gap-3 items-center'>
          {!confirmPost ? <button className="bg-blue-700 text-white m-4 px-4 py-2 rounded" onClick={sendData}>Invia ricetta</button> : <Link className="bg-green-800 text-white m-4 px-4 py-2 rounded" href={`/`}>Torna alla home</Link>}
        </div>
        
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendData}>Invia ricetta</button> */}
    </section>
  )
}

export default RecipeSchedule