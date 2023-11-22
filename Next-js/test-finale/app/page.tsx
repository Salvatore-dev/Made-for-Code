"use client"

import { useEffect, useState } from 'react'
import { Recipes_type } from './lib/definitions'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  const [data, setData] = useState<Recipes_type[]>([])
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
      console.log(newRecipes);

      setData(newRecipes)
    }


    getRecipes()
  }, [])

  type Instruction = {
    text: string,
    duration: number,
    measurement: string
  }


  function getDuration(array: Instruction[]): number {
    let totalDuration = 0
    array.forEach((el: Instruction) => {
      if (el.measurement.includes("minuti")) {
        totalDuration += el.duration
      } else if (el.measurement.includes("ore")) {
        totalDuration += el.duration * 60
      } else if (el.measurement.includes("secondi")) {
        totalDuration += el.duration / 60
      }
    })
    return totalDuration
  }

  return (
    <>


      <section>
        <div className="flex justify-center items-center">
          <div className='grid grid-cols-12 '>
            {data.map((el) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-4 m-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={el.id}>
                <img className="card-image rounded-t-lg" alt={el.name} src={el.url} width={382}
                  height={254} />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Ricetta per {el.preparation.persons}:</strong> persone</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Tempo di preparazione: {getDuration((el.instructions))} minuti </strong>
                  </p>
                  <Link
                    href={`/recipes/${el.name}`} className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    Mosta di piu'
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>

  )
}
