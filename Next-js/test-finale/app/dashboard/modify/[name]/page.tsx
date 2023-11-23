"use client"

import { useEffect, useState, useReducer, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Recipes_type } from '@/app/lib/definitions'
import Ingredients from '@/app/components/ingredients'
import Steps from '@/app/components/steps'
import MainInformationRecipe from '@/app/components/mainInformationRecipe'
import { Recipe } from '@/app/lib/definitions'
import { memo } from 'react'

function Page({ params }: { params: { name: string } }) {

    const [confirmUpdate, setConfirmUpdate] = useState<boolean>(false)

    const [data, setData] = useState<Recipes_type | null>(null)
    const [idRecipe, setIdRecipe] = useState<number | null>(3)

    const fetchData = useCallback(async () => {
        try {
            const recipe = await fetch(`/api/recipes/${params.name}`, {
                method: 'GET',
            }).then(recipes => recipes.json());

            console.log("sono nella rotta", recipe[0]);
            if (recipe && recipe.length > 0) {
                const { id, details, name, url, preparation } = recipe[0];
                    setIdRecipe(id)
                console.log("ciao vedi il type of", typeof id);
                
                const newRecipe = {
                    id: id,
                    name: name,
                    url: url,
                    details: JSON.parse(details),
                    preparation: JSON.parse(preparation)
                };
                        console.log("controlla new recipe", newRecipe);
                        
                setData(newRecipe);

            }



        } catch (error) {
            // Gestisci gli errori
        }
    }, [params.name]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    // useEffect(() => {

    //     async function getRecipes() {
    //         const recipe = await fetch(`/api/recipes/${params.name}`, {
    //             method: 'GET',
    //         })
    //             .then(recipes => recipes.json())

    //         console.log("sono nella rotta", recipe[0]);
    //         const { id, details, name, url, preparation } = recipe[0]
    //         console.log("controllo id", id);


    //         const newRecipe = {
    //             id: id,
    //             name: name,
    //             url: url,
    //             details: JSON.parse(details),
    //             preparation: JSON.parse(preparation)

    //         }

    //         setData(newRecipe)
    //     }


    //     getRecipes()
    // }, [params.name])
    // console.log("sono nella singola pagina put", data);

    const passMainInformation = {
        name: data?.name,
        persons: data?.preparation.persons,
        url: data?.url
    }
    // useEffect(() => {
    //     if (data && data.id) {
    //         setIdRecipe(data.id);
    //     }
    // }, [data]);

    const defaultRecipe: Recipe = {
        main: [],
        ingredients: [],
        steps: [],
        id: 0
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
    console.log("vedimi sulla page modify", upDateRecipe);


    async function putData() {
        const dataToSend = {
            ...upDateRecipe, id: idRecipe
        }
        const send = await fetch(`/api/recipes/${params.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Indica che stai inviando dati JSON
            },
            body: JSON.stringify(dataToSend), // Converte l'oggetto in una stringa JSON
        });

        console.log("vedi risultato invio da client", send);
        if (send.ok) {
            setConfirmUpdate(true)
        }

    }


    return (
        <section className=' bg-gray-900'>
            <div className='flex items-end bg-gray-800 justify-center gap-2'>
                <h1 className=' text-center text-2xl font-semibold text-gray-200 my-3'>Modifica la scheda della ricetta: {data && data.name}</h1>
            </div>

            <MainInformationRecipe setSendRecipe={setUpDateRecipe} values={[passMainInformation]} />
            <Ingredients setSendRecipe={setUpDateRecipe} values={data?.preparation.ingredients} />
            <Steps setSendRecipe={setUpDateRecipe} values={data?.details} />
            <div className=' bg-gray-900 flex gap-3 items-center'>
                {!confirmUpdate ? <button className="bg-blue-700 text-white m-4 px-4 py-2 rounded" onClick={putData}>Invia ricetta</button> : <Link className="bg-green-800 text-white m-4 px-4 py-2 rounded" href={`/`}>Torna alla home</Link>}
            </div>

            
        </section>

    )
}


export default memo(Page)