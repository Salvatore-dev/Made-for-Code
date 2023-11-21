"use client"
import { useState, useRef} from 'react';
import { memo } from 'react';

const measurement = [
    "grammi (g)",
    "chilogrammi (kg)",
    "millilitri (ml)",
    "litri (l)",
    "tazze",
    "cucchiaini da tè",
    "cucchiai da tavola",
    "pezzi",
    "numero di quantita'"
];



import { types } from 'util';

type Ingredient = {
    name: string,
    quantity: number,
    measurement: string
}




function Ingredients() {
    const formRef = useRef<HTMLFormElement>(null);

    const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([])




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

    function deleteItem(i:number) {
        setIngredientsList(ingredientsList.filter((el, index) => i !== index))
    }
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Ingredienti</h2>
            <div className='bg-slate-200 flex flex-row gap-2 p-4'>
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Ingredienti selezionati</h2>
                    <div>
                        <ul>
                            {ingredientsList.map((items, i) => (
                                <li key={i + 'listIngredients'} className="mb-1">{`N.${i + 1}: ${items.name}, ${items.quantity} ${items.measurement}`} <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={()=> deleteItem(i)}>X</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleInputs} className='bg-slate-300 flex flex-col p-4' action="">
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='ingredient'>
                        Ingrediente:
                        <input type='text' id='ingredient' name='ingredient' required className="border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='quantity'>
                        Quantita:
                        <input type='number' min={1} id='quantity' name='quantity' required className="border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor="measurement">
                        Seleziona un'unità di misura:
                        <select name="measurement" id="measurement" required className="border rounded px-2 py-1">
                            <option value="">Seleziona un'unità di misura</option>
                            {measurement.map((item, index) => (
                                <option key={index + "value"} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">Aggiungi ingrediente</button>
                </form>
            </div>
        </div>
    )
}

export default memo(Ingredients)