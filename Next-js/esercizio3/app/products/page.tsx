"use client"
import {useEffect, useState} from "react"

import Link from "next/link"
import Image from "next/image"
// import test from "@/public/image/1.jpg"

import Product from "../types/product";
import Category from "../types/category";

function Products() {

  const data : Product[] = []

const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);

useEffect(()=>{
    async function getProducts() {
      const r = await fetch('/api/products');
      const resp = await r.json();

      setProducts(resp);
    }
    getProducts();

    async function getCategories() {
      const r = await fetch('/api/categories');
      const resp = await r.json();

      setCategories(resp);
    }
    getCategories();
},[])

function getPathImage(id: number) : string{
  const path = '/image/'
  const extens= '.jpg'

  return path + id + extens
}

    return (
        <section>
          <Link href="/" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Torna alla Home
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
            
          <div className="flex justify-center items-center">
            <div className='grid grid-cols-12 '>
              {products.map((el : Product)=> (
                <div className="col-span-12 sm:col-span-6 md:col-span-4 m-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={el.id}>
                    <Image className="card-image rounded-t-lg" alt={el.label} src={getPathImage(el.id)} width={382}
                          height={254} />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.label}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Prezzo:</strong> {el.price} €</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <strong>Categoria: </strong> 
                        {categories.find((cat:any) => cat.id == el.category)?.label}
                      </p>
                    </div>
                </div>
              ))}
            </div>
          </div>
            
        </section>
    )
}

export default Products