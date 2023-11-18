"use client"
import React from 'react'
import { products, categories } from '@/app/data/products'
import { useState } from 'react'
import { remove } from '../server-fn/deleteItem'
import Image from 'next/image'
import Link from 'next/link'

function ProductsList() {

    const [items, setItems] = useState(products)

    async function deleteEl(id: number) {
        console.log(id);
        const p = await remove(id)
        console.log(p);

        setItems(p)

    }



    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='bg-gray-700 w-full flex justify-center'>
                    <Link className='bg-green-500 border rounded-md p-4' href={`/`}>Torna alla Home</Link>
                </div>
                <div className='grid grid-cols-12 '>
                    {items.map(el => (
                        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center justify-around m-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={el.id}>
                            <Image className="card-image rounded-t-lg" src={categories.find(cat => cat.id === el.id_category)?.imageUrl as string} alt="" width={382}
                                height={254} />

                            <div className="p-5 flex flex-col">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.label}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Prezzo:</strong> {el.price} €</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Categoria:</strong> {categories.find(cat => cat.id === el.id_category)?.label}</p>
                                <button
                                    onClick={() => deleteEl(el.id)}
                                    type="button" className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    Elimina
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsList
