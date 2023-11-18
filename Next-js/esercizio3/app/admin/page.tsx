"use client"
import { useEffect, useState, useContext } from "react"
import Link from "next/link"
import { Button } from 'flowbite-react';
import Product from "../types/product";
import Modale from "../components/Modale";
//import { GlobalCtx } from "@/app/contextApplication/globalContext"

import ProductModal from "../components/ProductADDModal";

function Admin() {

  

  const data: Product[] = []

  const [products, setProducts] = useState<Product[]>([]);
  const [modalProd, setModalProd] = useState<boolean>(false)

  function handleEdit(a: any) {
    console.log("prodotto cliccato:", a, a.inputs, a.id)
    const { inputs, id } = a
    const r = products.map(el => {
      if (el.id === id) {
        return { ...el, ...inputs }
      }
      return el
    })

    console.log("vedi map,", r);
    setProducts([...r])


  }

  useEffect(() => {
    async function getProducts() {
      const r = await fetch('/api/products');
      const resp = await r.json();

      setProducts(resp);
    }
    if (!modalProd) {
       getProducts();
    }
   
  }, [modalProd])


  async function deleteProduct(id: number) {
    const data = await fetch('/api/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
    const response = await data.json()
    console.log(response.success);
    if (response.success) {
      const p = products.filter(el => {
        return el.id !== id
      })
      //console.log("vedi modifica", p);
      setProducts([...p])

    }


  }

  return (
    <section>
      <div className=" flex gap-1 justify-between">
        <Link href="/" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Torna alla Home
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
      <button onClick={()=> setModalProd(prev=> !prev)} className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Aggiungi un prodotto
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      </div>

      <div>
        <div className='grid grid-cols-12 '>
          {products.map((el: Product) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 m-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={el.id}>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.label}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Prezzo:</strong> {el.price} €</p>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Categoria:</strong> {categories.find(cat => cat.id === el.id_category)?.label}</p> */}
                <div className="flex items-center ">
                  <button
                    onClick={() => deleteProduct(el.id)}
                    type="button" className="mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">
                    Elimina
                  </button>
                  <Modale product={el} onEdit={handleEdit} />
                </div>
              </div>

            </div>
          ))}
        </div>

        <section>
          <ProductModal isOpen={modalProd} onClose={setModalProd} />
        </section>


      </div>
    </section>
  )
}

export default Admin