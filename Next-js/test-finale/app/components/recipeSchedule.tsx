"use client"

import React from 'react'
import { useReducer } from 'react'
import Ingredients from './ingredients'
import Steps from './steps'
import MainInformationRecipe from './mainInformationRecipe'

import { Recipe } from '../lib/definitions'


function RecipeSchedule() {

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
  
  }
  return (
    <section className=' bg-gray-900'>
      <div className='flex items-end bg-gray-800 justify-center gap-2'>
        <h1 className=' text-center text-2xl font-semibold text-gray-200 my-3'>Crea una nuova scheda</h1>
      </div>
        <MainInformationRecipe setSendRecipe={setSendRecipe} />
        <Ingredients setSendRecipe={setSendRecipe} />
        <Steps setSendRecipe={setSendRecipe}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendData}>Invia ricetta</button>
    </section>
  )
}

export default RecipeSchedule