"use client"

import React from 'react'

import { useState, useRef } from 'react';
import { memo } from 'react';

const measurement = [
    "secondi (s)",
    "minuti (m)",
    "ore (h)"
];

type Step = {
    text: string,
    duration: number
    measurement: string
}
function Steps() {
    const [todoList, setTodoList] = useState<Step[]>([])

    function handleInputs(e: any) {
        e.preventDefault()
        const ingredient = e.currentTarget.elements.todo.value
        const duration = e.currentTarget.elements.duration.value
        const measurement = e.currentTarget.elements.measurement.value

        const items: Step = {
            text: ingredient,
            duration: parseInt(duration),
            measurement: measurement
        }
        console.log("vedi qui", items);

        setTodoList(prev => [...prev, items])
        formRef.current?.reset();
    }

    const formRef = useRef<HTMLFormElement>(null);

    function deleteItem(i: number) {
        setTodoList(todoList.filter((el, index) => i !== index))
    }
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Preparazione</h2>
            <div className='bg-slate-200 flex flex-row gap-2 p-4'>
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Cose da fare</h2>
                    <div>
                        <ul>
                            {todoList.map((items, i) => (
                                <div key={i + "listTodo"} className="border p-4 mb-4 rounded">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold">{`Step ${i + 1}:`}</span>
                                        <button onClick={() => deleteItem(i)} className="bg-red-500 text-white rounded px-2 py-1 text-sm">X</button>
                                    </div>
                                    <p className="mt-2">{items.text}</p>
                                    <p className="text-gray-600">{`Tempo necessario: ${items.duration} ${items.measurement}`}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleInputs} className='bg-slate-300 flex flex-col p-4' action="">
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='todo'>
                        Cosa da fare:
                        <textarea id='todo' name='todo' required className="border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='duration'>
                        Durata:
                        <input type='number' step={0.1} min={1} id='duration' name='duration' required className="border rounded px-2 py-1" />
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
                    <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">Aggiungi Step</button>
                </form>
            </div>
        </div>
    )
}

export default memo(Steps)