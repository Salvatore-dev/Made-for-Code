"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Recipes_type } from '@/app/lib/definitions'


export default function Page({ params }: { params: { name: string } }) {

    const [data, setData] = useState<Recipes_type | null>(null)
    useEffect(() => {

        async function getRecipes() {
            const recipe = await fetch(`/api/recipes/${params.name}`, {
                method: 'GET',
            })
                .then(recipes => recipes.json())

            console.log("sono nella rotta", recipe[0]);
            const { id, details, name, url, preparation } = recipe[0]

            const newRecipe = {
                id: id,
                name: name,
                url: url,
                details: JSON.parse(details),
                preparation: JSON.parse(preparation)

            }
            // const newRecipes: Recipes_type[] = recipe.map((el: any) => {
            //   return { ...el, instructions: JSON.parse(el.detail), preparation: JSON.parse(el.preparation) }
            // })
            // console.log(newRecipes);

            setData(newRecipe)
        }


        getRecipes()
    }, [])
    console.log("sono nella singola pagina", data);


    return (


       data && <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 ">
            <div className="w-full lg:w-3/4 bg-white border border-gray-200 rounded-lg shadow-lg flex overflow-hidden">
                <div className="flex flex-col lg:w-1/2 p-4">
                    <img
                        className="rounded-t-lg object-cover w-full h-64 lg:h-full"
                        src={data.url}
                        alt=""
                    />
                    <h5 className="mt-4 mb-2 text-2xl font-bold text-gray-900">
                        {data.name}
                    </h5>
                </div>

                <div className="flex flex-col lg:w-1/2 p-4 bg-gray-100">
                    <h3 className="mb-4 text-gray-800">
                        Ricetta per {data.preparation.persons} persone
                    </h3>
                    <div>
                        <h4 className="mb-2">Ingredienti:</h4>
                        <ul>
                            {data.preparation.ingredients.map((el, i) => (
                                <li key={i + "ingredient"} className="mb-1">
                                    <span className="font-semibold">
                                        N.{i + 1}:{" "}
                                    </span>
                                    {el.quantity} {el.measurement} di {el.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h4 className="mb-2">Preparazione:</h4>
                        <ul>
                            {data.details.map((el, i) => (
                                <li key={i + "step"} className="mb-1">
                                    <span className="font-semibold">
                                        Step {i + 1}:{" "}
                                    </span>
                                    {el.text} Durata media: {el.duration} {el.measurement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}