"use client"
import { useState, useRef, useEffect } from 'react';
import { memo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Ingredient } from '../lib/definitions';

const measurement = [
    "grammi (g)",
    "chilogrammi (kg)",
    "millilitri (ml)",
    "litri (l)",
    "tazze",
    "cucchiaini da tè",
    "cucchiai da tavola",
    "pezzo/i",
    "numero di quantita'",
    "foglia/e",
    "pizzico/chi",
    "a piacere",
    "spicchio/i"
];





function Ingredients({ setSendRecipe, values = null }: { setSendRecipe: any, values?: Ingredient[] | null }) {
    const formRef = useRef<HTMLFormElement>(null);

    const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([])
    const [disableImputs, setDisableImputs] = useState<boolean>(false)

    useEffect(() => {
        if (values) {
            console.log("vedimi nella mdifya ingredients", values)
            setIngredientsList(values)
        }

        console.log("vedimi nella mdifya ingredients2", values)
    }, [values])


    function handleInputs(e: any) {
        e.preventDefault()
        const ingredient = e.currentTarget.elements.ingredient.value
        const quantity = e.currentTarget.elements.quantity.value
        const measurement = e.currentTarget.elements.measurement.value

        const items: Ingredient = {
            name: ingredient,
            quantity: parseInt(quantity),
            measurement: measurement
        }
        console.log("vedi qui", items);

        setIngredientsList(prev => [...prev, items])
        formRef.current?.reset();
    }

    function deleteItem(i: number) {
        setIngredientsList(ingredientsList.filter((el, index) => i !== index))
        setDisableImputs(false)
    }
    function sendData() {
        setDisableImputs(true)
        console.log("pronto per invio", ingredientsList);
        setSendRecipe({
            type: "ingredients",
            payload: ingredientsList
        })
    }
    return (
        <div className='text-gray-200 flex flex-col gap-1 '>
            <h2 className="text-2xl text-right font-bold m-4">Ingredienti</h2>
            <div className='bg-slate-700 flex flex-row gap-2 p-4'>
                <div className="w-1/2">
                    <div className='flex gap-2'>
                        <h2 className="text-xl font-semibold mb-2">Ingredienti selezionati</h2>
                        {disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={() => setDisableImputs(false)}>modifica</button>}
                    </div>

                    <div>
                        <ul>
                            <AnimatePresence>
                                {ingredientsList.map((items, i) => (
                                    <motion.li
                                    initial={{ translateX: -200 }}
                                    animate={{ translateX: 0 }}
                                    transition={{ duration: 2 }}
                                    exit={{ translateX: -200, opacity: 0 }}
                                        key={i + 'listIngredients'} className="mb-1">{`N.${i + 1}: ${items.name}, ${items.quantity} ${items.measurement}`}{!disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={() => deleteItem(i)}>X</button>} </motion.li>
                                ))}
                            </AnimatePresence>

                        </ul>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleInputs} className='bg-gray-900 flex flex-col p-4 border rounded-xl' action="">
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='ingredient'>
                        Ingrediente:
                        <input type='text' disabled={disableImputs} id='ingredient' name='ingredient' required className="text-gray-900 border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='quantity'>
                        Quantita:
                        <input type='number' disabled={disableImputs} min={1} id='quantity' name='quantity' required className="text-gray-900 border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor="measurement">
                        Seleziona un'unità di misura:
                        <select name="measurement" disabled={disableImputs} id="measurement" required className="text-gray-900 border rounded px-2 py-1">
                            <option value="">Seleziona un'unità di misura</option>
                            {measurement.map((item, index) => (
                                <option key={index + "value"} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <button type='submit' disabled={disableImputs} className="bg-blue-500 text-white px-4 py-2 rounded">Aggiungi ingrediente</button>
                    {!disableImputs && <button type='button' onClick={sendData} className="bg-blue-800 mt-2 text-white px-4 py-2 rounded">Termina sezione</button>}
                </form>

            </div>
        </div>
    )
}

export default memo(Ingredients)