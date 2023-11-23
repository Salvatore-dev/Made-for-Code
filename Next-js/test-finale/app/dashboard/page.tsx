"use client"
import RecipeSchedule from '../components/recipeSchedule'
import React from 'react'
import { useEffect, useState } from 'react'
import { Recipes_type } from '../lib/definitions'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";

function Dashboard() {

  const [data, setData] = useState<Recipes_type[] | null>(null)
  useEffect(() => {

    async function getRecipes() {
      const recipes = await fetch('/api/recipes', {
        method: 'GET',
        cache: 'no-store'
      })
        .then(recipes => recipes.json())


      const newRecipes: Recipes_type[] = recipes.map((el: Recipes_type) => {
        return { ...el, instructions: JSON.parse(el.instructions), preparation: JSON.parse(el.preparation) }
      })
      console.log("sono nella dashbord", newRecipes);

      setData(newRecipes)
    }


    getRecipes()
  }, [])

  async function deleteRecipe(recipe: string) {

    const response = await fetch(`api/recipes/${recipe}`, {
      method: 'DELETE',
    })

    const resp = await response.json()
    console.log("vedi risposta della delete", resp);
    if (resp.success) {
      const listFiltered : Recipes_type[] = data?.filter(el => {
        return el.name !== recipe
      })
      setData(listFiltered)
    }

  }
  return (


    <div className="w-full p-4 bg-white border border-gray-900 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Lista Ricette</h5>
        <Link href="/dashboard/create" className=" bg-blue-700 text-sm font-medium text-gray-200 border rounded-xl p-2">
          Crea una nuova ricetta
        </Link>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <AnimatePresence>
            {data && data.map(el => (
                <motion.li
                  initial={{ translateX: -500 }}
                  animate={{ translateX: 0 }}
                  transition={{ duration: 2 }}
                  exit={{ translateX: -500, opacity: 0 }}

                  key={el.name} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="w-12 h-12 rounded-full hidden sm:block" src={el.url} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 sm:ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {el.name}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-2">
                      <Link className=' bg-yellow-600 text-center text-base sm:text-lg p-1 sm:p-2 border rounded-lg' href={`dashboard/modify/${el.name}`}>Modifica</Link>
                      <button className=' bg-red-900 text-center text-base sm:text-lg p-1 sm:p-2 border rounded-lg' onClick={() => deleteRecipe(el.name)} >Elimina ricetta</button>
                    </div>
                  </div>
                </motion.li>
            ))}
          </AnimatePresence>

        </ul>
      </div>
    </div>

  )
}

export default Dashboard