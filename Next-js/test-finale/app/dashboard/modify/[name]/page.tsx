"use client"

import { useEffect, useState, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Recipes_type } from '@/app/lib/definitions'
import Ingredients from '@/app/components/ingredients'
import Steps from '@/app/components/steps'
import MainInformationRecipe from '@/app/components/mainInformationRecipe'
import { Recipe } from '@/app/lib/definitions'
import { memo } from 'react'

function Page({ params }: { params: { name: string } }) {

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

    const passMainInformation = {
        name: data?.name,
        persons: data?.preparation.persons,
        url: data?.url
    }

    const defaultRecipe: Recipe = {
        main: [],
        ingredients: [],
        steps: [],
    }

    const [upDateRecipe, setUpDateRecipe] = useReducer<any>((state, action) => {
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

    console.log("vedimi sulla scheda", upDateRecipe);
    return (
        <section className=' bg-gray-900'>
            <div className='flex items-end bg-gray-800 justify-center gap-2'>
                <h1 className=' text-center text-2xl font-semibold text-gray-200 my-3'>Modifica la scheda della ricetta: {data && data.name}</h1>
            </div>

                    <MainInformationRecipe setSendRecipe={setUpDateRecipe} values={[passMainInformation]} />
                    <Ingredients setSendRecipe={setUpDateRecipe} values={data?.preparation.ingredients} />
                    <Steps setSendRecipe={setUpDateRecipe} values={data?.details} />


            <button className="bg-blue-500 text-white px-4 py-2 rounded">Invia ricetta</button>
        </section>

    )
}


export default memo(Page)