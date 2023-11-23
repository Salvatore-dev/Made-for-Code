"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import { memo } from 'react';
import { Step } from '../lib/definitions';

const measurement = [
    "secondi (s)",
    "minuti (m)",
    "ore (h)"
];

function Steps({setSendRecipe, values = null} : {setSendRecipe: any, values?: Step[] | null}) {
    const [todoList, setTodoList] = useState<Step[]>([])
    const [disableImputs, setDisableImputs] = useState<boolean>(false)

    useEffect(()=>{
        if (values) {
            console.log("vedimi nella mdifya ingredients", values)
            setTodoList(values)  
        }
    
        console.log("vedimi nella mdifya ingredients2", values) 
    }, [values])

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
        setDisableImputs(false)
    }

    function sendData() {
        setDisableImputs(true)
        console.log("pronto per invio", todoList);
        setSendRecipe({
            type: "steps", 
            payload: todoList
          })
    }
    return (
        <div className='text-gray-200 flex flex-col gap-1 '>
            <h2 className="text-2xl text-right font-bold m-4">Preparazione</h2>
            <div className='bg-slate-700 flex flex-row gap-2 p-4'>
                <div className="w-1/2">
                <div className='flex gap-2'>
                        <h2 className="text-xl font-semibold mb-2">Preparazione: </h2>
                        {disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={()=> setDisableImputs(false)}>modifica</button> }
                    </div>
                    <div>
                        <ul>
                            <AnimatePresence>
                                {todoList.map((items, i) => (
                                <motion.div 
                                initial={{ translateX: -400 }}
                                    animate={{ translateX: 0 }}
                                    transition={{ duration: 2 }}
                                    exit={{ translateX: -400, opacity: 0 }}
                                
                                key={i + "listTodo"} className="border p-4 mb-4 rounded">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold">{`Step ${i + 1}:`}</span>
                                        {!disableImputs && <button className="ml-2 bg-red-500 text-white rounded px-2 py-1 text-sm" onClick={()=> deleteItem(i)}>X</button> }
                                    </div>
                                    <p className="mt-2">{items.text}</p>
                                    <p className="text-gray-200">{`Tempo necessario: ${items.duration} ${items.measurement}`}</p>
                                </motion.div>
                            ))}
                            </AnimatePresence>
                            
                        </ul>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleInputs} className='bg-gray-900 flex flex-col p-4 border rounded-xl' action="">
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='todo'>
                        Cosa da fare:
                        <textarea id='todo' name='todo' disabled={disableImputs} required  className="text-gray-900 border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor='duration'>
                        Durata:
                        <input type='number' disabled={disableImputs} step={0.1} min={1} id='duration' name='duration' required className="text-gray-900 border rounded px-2 py-1" />
                    </label>
                    <label className='flex flex-row gap-1 items-center justify-between mb-4' htmlFor="measurement">
                        Seleziona un'unità di misura:
                        <select name="measurement" id="measurement" disabled={disableImputs} required className="text-gray-900 border rounded px-2 py-1">
                            <option value="">Seleziona un'unità di misura</option>
                            {measurement.map((item, index) => (
                                <option key={index + "value"} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <button type='submit' disabled={disableImputs} className="bg-blue-500 text-white px-4 py-2 rounded">Aggiungi Step</button>
                    {!disableImputs && <button type='button' onClick={sendData} className="bg-blue-800 mt-2 text-white px-4 py-2 rounded">Termina sezione</button>}
                </form>
            </div>
        </div>
    )
}

export default memo(Steps)